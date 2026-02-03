import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { searchIndex, type SearchItem } from '../../data/searchIndex';

export default function GlobalSearch() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<SearchItem[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    // Toggle search visibility
    const toggleSearch = () => {
        console.log("GlobalSearch toggle");
        setIsOpen(!isOpen);
        if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            setSearchTerm('');
        }
    };

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
                document.body.style.overflow = '';
            }
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                toggleSearch();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    // Handle Search
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setResults([]);
            return;
        }

        const term = searchTerm.toLowerCase();
        const filtered = searchIndex.filter(
            (item) =>
                item.title.toLowerCase().includes(term) ||
                (item.description && item.description.toLowerCase().includes(term))
        );
        // Group categories? Na, flat list is fine for now, maybe sort by category relevance?
        // Limit to 10 results
        setResults(filtered.slice(0, 10));
    }, [searchTerm]);

    const handleLinkClick = () => {
        setIsOpen(false);
        document.body.style.overflow = '';
    }

    // Click outside to close
    const handleClickOutside = (e: React.MouseEvent) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
            toggleSearch();
        }
    }

    return (
        <>
            <button
                onClick={toggleSearch}
                className="p-2 text-neutral-600 hover:text-[--color-primary-900] hover:bg-neutral-50 rounded-lg transition-colors"
                aria-label="Suche öffnen"
            >
                <Search className="w-5 h-5" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-start justify-center pt-20 px-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                        onClick={toggleSearch}
                    />

                    {/* Search Box */}
                    <div
                        ref={searchContainerRef}
                        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
                    >
                        {/* Header / Input */}
                        <div className="flex items-center p-4 border-b border-neutral-100">
                            <Search className="w-5 h-5 text-neutral-400 mr-3" />
                            <input
                                ref={inputRef}
                                autoFocus
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Suche nach Rechtsgebieten, Anwälten, Themen..."
                                className="flex-1 text-lg outline-none placeholder:text-neutral-400 text-neutral-900"
                            />
                            <button
                                onClick={toggleSearch}
                                className="p-1 ml-2 text-neutral-400 hover:text-neutral-600 rounded-lg hover:bg-neutral-100"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="overflow-y-auto">
                            {searchTerm && results.length > 0 ? (
                                <ul className="py-2">
                                    {results.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={item.href}
                                                onClick={handleLinkClick}
                                                className="flex items-start px-4 py-3 hover:bg-[--color-primary-50] group transition-colors"
                                            >
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="font-medium text-neutral-900 group-hover:text-[--color-primary-900]">
                                                            {item.title}
                                                        </span>
                                                        <span className="text-xs uppercase tracking-wider font-semibold text-[--color-accent-600] bg-[--color-accent-50] px-2 py-0.5 rounded">
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                    {item.description && (
                                                        <p className="text-sm text-neutral-500 line-clamp-1">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-[--color-primary-400] self-center ml-2" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ) : searchTerm ? (
                                <div className="p-8 text-center text-neutral-500">
                                    <p>Keine Ergebnisse für "{searchTerm}" gefunden.</p>
                                </div>
                            ) : (
                                <div className="p-8 text-center text-neutral-400">
                                    <p className="mb-2">Geben Sie einen Suchbegriff ein.</p>
                                    <div className="flex justify-center gap-2 text-xs">
                                        <span className="bg-neutral-100 px-2 py-1 rounded">Rechtsgebiete</span>
                                        <span className="bg-neutral-100 px-2 py-1 rounded">Anwälte</span>
                                        <span className="bg-neutral-100 px-2 py-1 rounded">Karriere</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-100 text-xs text-neutral-500 flex justify-between items-center">
                            <span>Suche nach Inhalten auf der Webseite</span>
                            <span className="hidden sm:inline">ESC zum Schließen</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
