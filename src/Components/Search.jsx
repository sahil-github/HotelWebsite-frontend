import { useState, useEffect } from 'react';

function Search() {

    const [searchTerm, setSearchTerm] = useState('');
    const [debouncing, setDebouncing] = useState(false);
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const handleSearch = setTimeout(() => {
            setDebouncing(searchTerm)
        }, 500)


        return () => clearTimeout(handleSearch)

    }, [searchTerm])

    useEffect(() => {

    }, [debouncing])

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="flex-1 bg-transparent  text-white text-[15px] placeholder-white/40"
                    autoFocus
                />
            </div>

        </>
    )
}

export default Search;