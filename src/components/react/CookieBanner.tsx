import { useState, useEffect } from 'react';
import { X, Cookie, Settings, Check } from 'lucide-react';

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
    necessary: true, // Always true
    analytics: false,
    marketing: false,
};

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        } else {
            try {
                setPreferences(JSON.parse(consent));
            } catch {
                setPreferences(defaultPreferences);
            }
        }
    }, []);

    const savePreferences = (prefs: CookiePreferences) => {
        localStorage.setItem('cookie-consent', JSON.stringify(prefs));
        localStorage.setItem('cookie-consent-date', new Date().toISOString());
        setPreferences(prefs);
        setIsVisible(false);
        setShowSettings(false);
    };

    const acceptAll = () => {
        savePreferences({
            necessary: true,
            analytics: true,
            marketing: true,
        });
    };

    const acceptNecessary = () => {
        savePreferences({
            necessary: true,
            analytics: false,
            marketing: false,
        });
    };

    const saveCustomPreferences = () => {
        savePreferences(preferences);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-end justify-center p-4 md:p-6">
            {/* Backdrop - subtle overlay, no blur to keep page readable */}
            <div
                className="absolute inset-0 bg-black/20"
                onClick={() => setShowSettings(false)}
            />

            {/* Banner */}
            <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-neutral-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[--color-accent-100] flex items-center justify-center">
                            <Cookie className="w-5 h-5 text-[--color-accent-600]" />
                        </div>
                        <h2 className="text-lg md:text-xl font-serif font-bold text-[--color-primary-900]">
                            Cookie-Einstellungen
                        </h2>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                    {!showSettings ? (
                        <div className="space-y-4">
                            <p className="text-neutral-600">
                                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                                Einige Cookies sind notwendig, um die Funktionalität der Website sicherzustellen.
                                Andere helfen uns, die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.
                            </p>
                            <p className="text-sm text-neutral-500">
                                Weitere Informationen finden Sie in unserer{' '}
                                <a href="/datenschutz/" className="underline hover:text-[--color-primary-900]">
                                    Datenschutzerklärung
                                </a>.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {/* Necessary Cookies */}
                            <div className="p-4 bg-neutral-50 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold text-[--color-primary-900]">
                                            Notwendige Cookies
                                        </h3>
                                        <p className="text-sm text-neutral-500 mt-1">
                                            Diese Cookies sind für die Grundfunktionen der Website erforderlich.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-neutral-400">Immer aktiv</span>
                                        <div className="w-12 h-6 bg-[--color-primary-900] rounded-full flex items-center justify-end px-1">
                                            <div className="w-4 h-4 bg-white rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Analytics Cookies */}
                            <div className="p-4 bg-neutral-50 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold text-[--color-primary-900]">
                                            Analyse-Cookies
                                        </h3>
                                        <p className="text-sm text-neutral-500 mt-1">
                                            Helfen uns, die Nutzung der Website zu verstehen und zu verbessern.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.analytics
                                            ? 'bg-[--color-primary-900] justify-end'
                                            : 'bg-neutral-300 justify-start'
                                            }`}
                                    >
                                        <div className="w-4 h-4 bg-white rounded-full shadow" />
                                    </button>
                                </div>
                            </div>

                            {/* Marketing Cookies */}
                            <div className="p-4 bg-neutral-50 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold text-[--color-primary-900]">
                                            Marketing-Cookies
                                        </h3>
                                        <p className="text-sm text-neutral-500 mt-1">
                                            Werden verwendet, um Ihnen relevante Werbung anzuzeigen.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.marketing
                                            ? 'bg-[--color-primary-900] justify-end'
                                            : 'bg-neutral-300 justify-start'
                                            }`}
                                    >
                                        <div className="w-4 h-4 bg-white rounded-full shadow" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex flex-col-reverse md:flex-row items-stretch md:items-center justify-between gap-3 p-4 md:p-6 bg-neutral-50 border-t border-neutral-100">
                    <div className="flex items-center gap-3">
                        {!showSettings ? (
                            <button
                                onClick={() => setShowSettings(true)}
                                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-[--color-primary-900] hover:bg-white rounded-lg transition-colors"
                            >
                                <Settings className="w-4 h-4" />
                                Einstellungen
                            </button>
                        ) : (
                            <button
                                onClick={() => setShowSettings(false)}
                                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-[--color-primary-900] hover:bg-white rounded-lg transition-colors"
                            >
                                Zurück
                            </button>
                        )}
                    </div>
                    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                        <button
                            onClick={acceptNecessary}
                            className="px-5 py-2.5 text-sm font-medium text-[--color-primary-900] border border-[--color-primary-900] hover:bg-[--color-primary-50] rounded-lg transition-colors"
                        >
                            Nur Notwendige
                        </button>
                        {showSettings ? (
                            <button
                                onClick={saveCustomPreferences}
                                className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-[--color-primary-900] text-white hover:bg-[--color-primary-800] rounded-lg transition-colors"
                            >
                                <Check className="w-4 h-4" />
                                Auswahl speichern
                            </button>
                        ) : (
                            <button
                                onClick={acceptAll}
                                className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-[--color-primary-900] text-white hover:bg-[--color-primary-800] rounded-lg transition-colors"
                            >
                                <Check className="w-4 h-4" />
                                Alle akzeptieren
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
