import React from "react";
import {useState} from "react";
import MovieList from "../components/MovieList";
import AddMovieForm from "./AddMovieForm";

const MovieApp = () => {
    const [movies, setMovies] = useState([]);

    const addMovie = (title, rating) => {
        const newMovie = {
            title, 
            rating: parseInt(rating), 
        };
        setMovies([...movies, newMovie]);
    }

    const deleteMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    return(
        <div className="container">
            <h1>Min filmlista</h1>
            <AddMovieForm onAddMovie={addMovie}/>
            <h2> Filmer</h2>
            <ul>
                <MovieList movies={movies} onDelete={deleteMovie}/>
            </ul>
        </div>
    )


}
export default MovieApp;