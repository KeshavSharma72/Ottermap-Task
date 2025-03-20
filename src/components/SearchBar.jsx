import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearchChange(e) {
        setSearchTerm(e.target.value);
        if (onSearch) {
            onSearch(e.target.value);  // Pass the search term to the parent component
        }
    }

    function handleClear() {
        setSearchTerm("");  // Clear the search input
        if (onSearch) {
            onSearch("");  // Clear the search term in the parent component as well
        }
    }

    return (
        <div style={styles.container}>
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={styles.input}
            />
            {searchTerm && (
                <button onClick={handleClear} style={styles.clearButton}>
                    Clear
                </button>
            )}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        justifyContent: 'center',
    },
    input: {
        width: '250px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
        marginRight: '10px',
    },
    clearButton: {
        padding: '6px 12px',
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};
