import { useState, useEffect } from 'react';
import { Phone, Mail, X, MessageCircle } from 'lucide-react';

/**
 * StickyContact - Floating contact options
 * Mobile: Bottom bar with phone/email buttons
 * Desktop: Subtle side button that expands on hover
 */
export default function StickyContact() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 400px
            const shouldShow = window.scrollY > 400 && !isDismissed;
            setIsVisible(shouldShow);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDismissed]);

    if (!isVisible) return null;

    return (
        <>
            {/* Mobile Version - Bottom Bar */}
            <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
                <div
                    className="bg-white rounded-xl shadow-lg border border-neutral-200 p-3 flex items-center justify-between gap-2"
                    style={{ animation: 'slideUp 0.3s ease-out' }}
                >
                    <a
                        href="tel:+49751363530"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-medium transition-colors"
                        style={{ backgroundColor: '#003466', color: 'white' }}
                    >
                        <Phone className="w-4 h-4" />
                        <span>Anrufen</span>
                    </a>

                    <a
                        href="mailto:info@lischka-partner.de"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-medium transition-colors"
                        style={{ border: '2px solid #003466', color: '#003466' }}
                    >
                        <Mail className="w-4 h-4" />
                        <span>E-Mail</span>
                    </a>

                    <button
                        onClick={() => setIsDismissed(true)}
                        className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
                        aria-label="Schließen"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Desktop Version - Side Button */}
            <div
                className="hidden md:block fixed bottom-8 right-8 z-50"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
            >
                <div
                    className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden transition-all duration-300"
                    style={{
                        width: isExpanded ? '220px' : '56px',
                        animation: 'fadeIn 0.3s ease-out'
                    }}
                >
                    {isExpanded ? (
                        // Expanded state with contact options
                        <div className="p-4 space-y-3">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-sm" style={{ color: '#003466' }}>
                                    Kontakt
                                </span>
                                <button
                                    onClick={() => setIsDismissed(true)}
                                    className="p-1 text-neutral-400 hover:text-neutral-600 transition-colors"
                                    aria-label="Schließen"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <a
                                href="tel:+49751363530"
                                className="flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-neutral-50 group"
                            >
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: '#003466' }}
                                >
                                    <Phone className="w-4 h-4 text-white" />
                                </div>
                                <div className="text-sm">
                                    <div className="font-medium" style={{ color: '#003466' }}>Anrufen</div>
                                    <div className="text-neutral-500 text-xs">0751 36353-0</div>
                                </div>
                            </a>

                            <a
                                href="mailto:info@lischka-partner.de"
                                className="flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-neutral-50"
                            >
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: '#c8b291' }}
                                >
                                    <Mail className="w-4 h-4 text-white" />
                                </div>
                                <div className="text-sm">
                                    <div className="font-medium" style={{ color: '#003466' }}>E-Mail</div>
                                    <div className="text-neutral-500 text-xs">Schreiben</div>
                                </div>
                            </a>
                        </div>
                    ) : (
                        // Collapsed state - just the icon
                        <button
                            className="w-14 h-14 flex items-center justify-center transition-colors"
                            style={{ backgroundColor: '#003466' }}
                            aria-label="Kontakt öffnen"
                        >
                            <MessageCircle className="w-6 h-6 text-white" />
                        </button>
                    )}
                </div>
            </div>

            <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
        </>
    );
}
