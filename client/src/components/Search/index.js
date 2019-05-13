import React, { Component } from "react";
import "../Modal/style.css";

class Search extends Component {

    state = {
        searchName: "",
      };

    onNameChanged = (event) => {
        this.setState ({ 
            searchName: event.target.value
        });
    }

    onSearchButton = () => {
        if ( this.state.searchName.length > 0 )
        {
            window.location = '/search/' + this.state.searchName;
        }
    }

    render() {
        return (
            <div className="barbutton">
                <input 
                    className="search" 
                    type="text" 
                    name="search" 
                    value={this.state.searchName} 
                    onChange={this.onNameChanged}
                    placeholder="search movie...">
                </input>
                <a className="search-go" onClick={this.onSearchButton} ><i className="fas fa-search"></i></a>
            </div>
        );
    }
}

export default Search;