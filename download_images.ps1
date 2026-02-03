$ErrorActionPreference = "Stop"

# Create directory
$dir = "src\assets\images"
if (!(Test-Path -Path $dir)) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
    Write-Host "Created directory $dir"
}

# Image mapping
$images = @{
    'logo.png'                = 'https://www.lischka-partner.de/wp-content/uploads/2023/04/Logo_Long.png'
    'logo-white.png'          = 'https://www.lischka-partner.de/wp-content/uploads/2023/04/Logo_weiss.png'
    'logo-square.png'         = 'https://www.lischka-partner.de/wp-content/uploads/2023/04/Logo.png'
    
    # Sliders / Headers
    'header-home.jpg'         = 'https://www.lischka-partner.de/wp-content/uploads/2024/12/Lischka-1573-4-scaled.jpg'
    'header-kanzlei.jpg'      = 'https://www.lischka-partner.de/wp-content/uploads/2023/11/Lischka-1433-scaled.jpg'
    
    # Team
    'team-lischka.jpg'        = 'https://www.lischka-partner.de/wp-content/uploads/2023/11/Lischka.jpg'
    'team-hornstein.jpg'      = 'https://www.lischka-partner.de/wp-content/uploads/2023/04/Lischka-1198.jpg'
    'team-betzel.jpg'         = 'https://www.lischka-partner.de/wp-content/uploads/2023/04/Lischka-1152.jpg'
    'team-colas.jpg'          = 'https://www.lischka-partner.de/wp-content/uploads/2026/01/IMG_8165b-1.jpg'
    'team-dragoescu.jpg'      = 'https://www.lischka-partner.de/wp-content/uploads/2026/01/IMG_8262b-1.jpg'
    'team-pult.jpg'           = 'https://www.lischka-partner.de/wp-content/uploads/2026/01/IMG_8244b-1.jpg'
    
    # Assistants
    'assistant-haerdtner.jpg' = 'https://www.lischka-partner.de/wp-content/uploads/2023/04/Lischka-582-1.jpg'
    'assistant-prinz.jpg'     = 'https://www.lischka-partner.de/wp-content/uploads/2023/04/Lischka-374.jpg'
    'assistant-steinke.jpg'   = 'https://www.lischka-partner.de/wp-content/uploads/2023/04/Lischka-306.jpg'
    'assistant-albina.png'    = 'https://www.lischka-partner.de/wp-content/uploads/2026/01/Gemini_Generated_Image_zb2tdizb2tdizb2t.png'
    'assistant-armina.png'    = 'https://www.lischka-partner.de/wp-content/uploads/2026/01/Gemini_Generated_Image_f3oulkf3oulkf3ou.png'
}

foreach ($name in $images.Keys) {
    try {
        $url = $images[$name]
        $path = Join-Path $dir $name
        if (!(Test-Path $path)) {
            Write-Host "Downloading $name..."
            Invoke-WebRequest -Uri $url -OutFile $path
        }
        else {
            Write-Host "Skipping $name (exists)"
        }
    }
    catch {
        Write-Warning "Failed to download $name ... $_"
    }
}

