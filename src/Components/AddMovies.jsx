import { useContext, useState } from "react"
import React from 'react'
import { MovieContext } from "./MovieContext"

const AddMovies = () => {

    const [Movies, setMovies] = useContext(MovieContext);
    const [Name, setName] = useState("");
    const [price, setPrice] = useState("");

    const updateName = (e) => {
        setName(e.target.value);
    }
    const updatePrice = (e) => {
        setPrice(e.target.value);
    }
}