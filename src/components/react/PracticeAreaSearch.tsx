import React, { useState } from "react";
import type { PracticeArea } from "../../types";
import { Search } from "lucide-react";

interface Props {
    areas: PracticeArea[];
}

export default function PracticeAreaSearch({ areas }: Props) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredAreas = (areas || []).filter((area) =>
        area.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full">
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto mb-12">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Nach Rechtsgebiet suchen (z.B. Arbeitsrecht, Scheidung)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-6 py-4 pl-14 text-lg bg-white border border-neutral-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent transition-all"
                    />
                    <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-neutral-400 w-6 h-6" />
                </div>
            </div>

            {/* Grid Results */}
            {filteredAreas.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredAreas.map((area) => (
                        <div
                            key={area.id}
                            className="group flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-neutral-100 h-full"
                        >
                            <div className="mb-4">
                                <div className="w-12 h-12 bg-[--color-primary-50] rounded-lg flex items-center justify-center group-hover:bg-[--color-primary-100] transition-colors">
                                    <span className="text-xl font-serif font-bold text-[--color-primary-800]">
                                        {area.name.charAt(0)}
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[--color-primary-700] transition-colors mb-2">
                                {area.name}
                            </h3>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-xl text-neutral-500 mb-4">
                        Keine Rechtsgebiete gefunden für "{searchTerm}"
                    </p>
                    <button
                        onClick={() => setSearchTerm("")}
                        className="text-[--color-primary-600] font-medium hover:underline"
                    >
                        Suche zurücksetzen
                    </button>
                </div>
            )}
        </div>
    );
}
