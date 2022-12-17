import React, {createContext, useState} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
 const [movies, setMovies] = useState([
    {
        name: "Thunivu",
        price: "Rs.250",
        id: "001",
    },
    {
        name: "Varisu",
        price: "Rs.10",
        id: "002",
    },
    {
        name: "VTK 2",
        price: "Rs.150",
        id: "003",
    }
 ]);
 return(
    <MovieContext.Provider value={[movies, setMovies]}></MovieContext.Provider>
 )
}