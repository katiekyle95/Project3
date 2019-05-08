import React from "react";
import "../Modal/style.css";

function Search() {
    return (
        <div className="barbutton">
            <input className="search" type="text" name="search" placeholder="search movie..."></input>
            <button className="search-go"><i class="fas fa-search"></i></button>
        </div>
    );
}

export default Search;