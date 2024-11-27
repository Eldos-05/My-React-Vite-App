import React, { useState } from 'react';

const FilterComponent = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");

    return (
        <div>
            <h1>Filter List</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    );
};

export default FilterComponent;
