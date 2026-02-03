import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavigationItem } from '../../types';

interface Props {
    navigation: NavigationItem[];
    currentPath: string;
}

export default function MobileNav({ navigation, currentPath }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const toggleExpanded = (label: string) => {
        setExpandedItems(prev =>
            prev.includes(label)
                ? prev.filter(item => item !== label)
                : [...prev, label]
        );
    };

    const isActive = (href: string) => {
        if (href === '/') return currentPath === '/';
        return currentPath.startsWith(href);
    };

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center w-10 h-10 text-neutral-700 hover:text-[--color-primary-900] hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Menü öffnen"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Overlay + Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 z-50"
                            onClick={() => setIsOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Drawer */}
                        <motion.nav
                            id="mobile-menu"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl overflow-y-auto"
                            aria-label="Mobile Navigation"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                                <span className="text-xl font-serif font-bold text-[--color-primary-900]">
                                    Menü
                                </span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center w-10 h-10 text-neutral-700 hover:text-[--color-primary-900] hover:bg-neutral-100 rounded-lg transition-colors"
                                    aria-label="Menü schließen"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <ul className="py-4">
                                {navigation.map((item) => (
                                    <li key={item.label}>
                                        {item.children ? (
                                            <div>
                                                <button
                                                    onClick={() => toggleExpanded(item.label)}
                                                    className="flex items-center justify-between w-full px-6 py-3 text-left text-neutral-700 hover:bg-neutral-50 transition-colors"
                                                    aria-expanded={expandedItems.includes(item.label)}
                                                >
                                                    <span className="font-medium">{item.label}</span>
                                                    <ChevronDown
                                                        className={`w-5 h-5 transition-transform ${expandedItems.includes(item.label) ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                </button>
                                                <AnimatePresence>
                                                    {expandedItems.includes(item.label) && (
                                                        <motion.ul
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="overflow-hidden bg-neutral-50"
                                                        >
                                                            {item.children.map((child) => (
                                                                <li key={child.label}>
                                                                    <a
                                                                        href={child.href}
                                                                        target={child.external ? '_blank' : undefined}
                                                                        rel={child.external ? 'noopener noreferrer' : undefined}
                                                                        onClick={() => setIsOpen(false)}
                                                                        className="flex items-center gap-2 px-8 py-3 text-sm text-neutral-600 hover:text-[--color-primary-900] hover:bg-neutral-100 transition-colors"
                                                                    >
                                                                        {child.label}
                                                                        {child.external && <ExternalLink className="w-3 h-3 opacity-50" />}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <a
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`block px-6 py-3 font-medium transition-colors ${isActive(item.href)
                                                    ? 'text-[--color-primary-900] bg-[--color-primary-50]'
                                                    : 'text-neutral-700 hover:bg-neutral-50'
                                                    }`}
                                                aria-current={isActive(item.href) ? 'page' : undefined}
                                            >
                                                {item.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                                <li key="polnisch">
                                    <a
                                        href="/service/polnisch/"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 px-6 py-3 font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
                                        aria-label="Polnische Version"
                                    >
                                        <svg viewBox="0 0 16 10" className="h-5 w-8 rounded-sm shadow-sm border border-neutral-200">
                                            <path fill="#fff" d="M0 0h16v5H0z" />
                                            <path fill="#dc143c" d="M0 5h16v5H0z" />
                                        </svg>
                                        <span>Polnisch / Polski</span>
                                    </a>
                                </li>
                            </ul>

                            {/* Contact CTA */}
                            <div className="p-6 border-t border-neutral-200">
                                <a
                                    href="/kontakt/"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center w-full gap-2 px-6 py-3 bg-[--color-primary-900] text-white font-medium rounded-lg hover:bg-[--color-primary-800] transition-colors"
                                >
                                    Kontaktieren Sie uns
                                </a>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
