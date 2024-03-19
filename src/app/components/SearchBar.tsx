"use client";
import React from 'react';

type SearchBarProps = {
    searchTerm: string;
    onSearchChange: (searchTerm: string) => void;
    onClearSearch: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange, onClearSearch }) => {
    return (
        <div className="m-2 relative">
            <input
                type="text"
                placeholder="Search by surname"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="p-2 min-w-full border border-gray-300 rounded"
            />
            {searchTerm && <button onClick={onClearSearch} className="absolute inset-y-1 right-1 p-1 bg-gray-200 rounded">
                x
            </button>}
        </div>
    );
};

export default SearchBar;

