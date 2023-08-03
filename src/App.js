import React from "react";
import { useEffect } from "react";
import './App.css'
import SearchIcon from "./search.svg";


// OMDB api key : bb773d77
const API_URL = "http://www.omdbapi.com/?apikey=bb773d77";


const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("star wars");
    }, [])

    return (
        <div className="app">
            <h1>MoviesLand</h1>


            <div className="search">
                <input
                    value="star wars"
                    onChange={() => { }}
                    placeholder="Search for movies"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                />
            </div>
        </div>
    )
}

export default App;