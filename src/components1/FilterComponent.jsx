import React, { useState, useEffect } from 'react';
import './App.css';
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

    
    const filteredData = data.filter((item) =>
        item.toLowerCase().includes(searchText.toLowerCase())
    );

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
                {filteredData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FilterComponent;
