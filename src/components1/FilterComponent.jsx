import React, { useState, useEffect } from 'react';

const FilterComponent = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setData([
                " Bishkek", "Osh", "Jalal-Abad", "Karakol", "Talas", "Naryn",
                "Batken", "Kant", "Tokmok", "Kyzyl-Kiya", "Uzgen", "Kara-Balta",
                "Mailuu-Suu", "Balykchy", "Tash-Kumyr",
            ]);
        }, 1000);
    }, []);

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
