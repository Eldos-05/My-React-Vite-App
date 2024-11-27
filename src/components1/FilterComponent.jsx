import React, { useState, useEffect } from "react";

const FilterComponent = () => {
    // State for managing data and search text
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    // Simulate data fetching with useEffect
    useEffect(() => {
        setTimeout(() => {
            setData([
                "Bishkek", "Osh", "Jalal-Abad", "Karakol", "Talas", "Naryn",
                "Batken", "Kant", "Tokmok", "Kyzyl-Kiya", "Uzgen", "Kara-Balta",
                "Mailuu-Suu", "Balykchy", "Tash-Kumyr",
            ]);
        }, 1000);
    }, []);

    // Effect for filtering data based on search text
    useEffect(() => {
        const filtered = data.filter((item) =>
            item.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchText, data]);

    return (
        <div>
            <h1>Filter List</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <ul>
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                ) : (
                    <li>No results found</li>
                )}
            </ul>
        </div>
    );
};

export default FilterComponent;
