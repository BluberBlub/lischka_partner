# Lischka Partner Deployment Script
# Deploys to: access-5019484682.webspace-host.com

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Lischka Partner Live Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Server details
$server = "access-5019484682.webspace-host.com"
$username = "su373050"
$password = "2k26Schnitzel1!"
$remotePath = "/lischka"
$localPath = "dist"

# Step 1: Build the project
Write-Host "[1/2] Building the project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Aborting deployment." -ForegroundColor Red
    exit 1
}
Write-Host "Build completed successfully!" -ForegroundColor Green
Write-Host ""

# Step 2: Upload via SFTP using WinSCP .NET assembly or curl
Write-Host "[2/2] Uploading files to server..." -ForegroundColor Yellow

# Try to find WinSCP
$winscpPaths = @(
    "C:\Program Files (x86)\WinSCP\WinSCPnet.dll",
    "C:\Program Files\WinSCP\WinSCPnet.dll",
    "$env:LOCALAPPDATA\Programs\WinSCP\WinSCPnet.dll"
)

$winscpDll = $null
foreach ($path in $winscpPaths) {
    if (Test-Path $path) {
        $winscpDll = $path
        break
    }
}

# Also check for WinSCP.com
$winscpCom = $null
$winscpComPaths = @(
    "C:\Program Files (x86)\WinSCP\WinSCP.com",
    "C:\Program Files\WinSCP\WinSCP.com",
    "$env:LOCALAPPDATA\Programs\WinSCP\WinSCP.com"
)
foreach ($path in $winscpComPaths) {
    if (Test-Path $path) {
        $winscpCom = $path
        break
    }
}

if ($winscpCom) {
    Write-Host "Using WinSCP command line..." -ForegroundColor Cyan
    
    # Create WinSCP script
    $scriptContent = @"
option batch abort
option confirm off
open sftp://${username}:${password}@${server}/ -hostkey=*
cd ${remotePath}
lcd ${localPath}
synchronize remote -delete
exit
"@
    
    $scriptPath = "$env:TEMP\winscp_deploy.txt"
    $scriptContent | Out-File -FilePath $scriptPath -Encoding ASCII
    
    & $winscpCom /ini=nul /script=$scriptPath
    $exitCode = $LASTEXITCODE
    
    Remove-Item $scriptPath -ErrorAction SilentlyContinue
    
    if ($exitCode -eq 0) {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "  Deployment completed successfully!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
    }
    else {
        Write-Host "Deployment failed with exit code $exitCode" -ForegroundColor Red
        exit 1
    }
}
elseif ($winscpDll) {
    Write-Host "Using WinSCP .NET assembly..." -ForegroundColor Cyan
    
    Add-Type -Path $winscpDll
    
    $sessionOptions = New-Object WinSCP.SessionOptions -Property @{
        Protocol                             = [WinSCP.Protocol]::Sftp
        HostName                             = $server
        UserName                             = $username
        Password                             = $password
        GiveUpSecurityAndAcceptAnySshHostKey = $true
    }
    
    $session = New-Object WinSCP.Session
    try {
        $session.Open($sessionOptions)
        
        $transferOptions = New-Object WinSCP.TransferOptions
        $transferOptions.TransferMode = [WinSCP.TransferMode]::Binary
        
        $synchronizationResult = $session.SynchronizeDirectories(
            [WinSCP.SynchronizationMode]::Remote,
            $localPath,
            $remotePath,
            $true
        )
        
        $synchronizationResult.Check()
        
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "  Deployment completed successfully!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
    }
    finally {
        $session.Dispose()
    }
}
else {
    # Fallback: Use curl with SFTP (if available)
    $curlAvailable = Get-Command curl.exe -ErrorAction SilentlyContinue
    
    if ($curlAvailable) {
        Write-Host "Using curl for SFTP upload..." -ForegroundColor Cyan
        Write-Host "This may take a while..." -ForegroundColor Yellow
        
        # Get all files in dist directory
        $files = Get-ChildItem -Path $localPath -Recurse -File
        $totalFiles = $files.Count
        $currentFile = 0
        
        foreach ($file in $files) {
            $currentFile++
            $relativePath = $file.FullName.Substring((Get-Item $localPath).FullName.Length + 1)
            $relativePath = $relativePath -replace '\\', '/'
            $remoteFile = "${remotePath}/${relativePath}"
            
            Write-Host "[$currentFile/$totalFiles] Uploading: $relativePath" -ForegroundColor Gray
            
            # Create remote directory if needed
            $remoteDir = Split-Path $remoteFile -Parent
            $remoteDir = $remoteDir -replace '\\', '/'
            
            curl.exe -s -k --ftp-create-dirs -u "${username}:${password}" -T $file.FullName "sftp://${server}${remoteFile}"
        }
        
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "  Deployment completed!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
    }
    else {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Red
        Write-Host "  ERROR: No SFTP client found!" -ForegroundColor Red
        Write-Host "========================================" -ForegroundColor Red
        Write-Host ""
        Write-Host "Please install WinSCP from:" -ForegroundColor Yellow
        Write-Host "  https://winscp.net/eng/download.php" -ForegroundColor White
        Write-Host ""
        Write-Host "Or upload manually via FileZilla with:" -ForegroundColor Yellow
        Write-Host "  Host: sftp://$server" -ForegroundColor White
        Write-Host "  User: $username" -ForegroundColor White
        Write-Host "  Pass: $password" -ForegroundColor White
        Write-Host "  Remote: $remotePath" -ForegroundColor White
        Write-Host ""
        Write-Host "Upload the contents of 'dist' folder to '$remotePath'" -ForegroundColor Cyan
        exit 1
    }
}
