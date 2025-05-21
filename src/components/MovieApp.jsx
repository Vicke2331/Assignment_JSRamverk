import React from "react";
import {useState} from "react";
import MovieList from "../components/MovieList";
import AddMovieForm from "./AddMovieForm";
import OrderByAphaButton from "./OrderByAlphaButton";
import OrderByGradeButton from "./OrderByGradeButton";

const MovieApp = () => {
    const [movies, setMovies] = useState([]);

    const addMovie = (title, rating) => {
        const newMovie = {
            id: Date.now(), 
            title, 
            rating: parseInt(rating), 
        };
        setMovies([...movies, newMovie]);
    }

    const deleteMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    const sortByTitle = () => {
        const sorted = [...movies].sort((a, b) => a.title.localeCompare(b.title));
        setMovies(sorted);
    };

    const sortByGrade = () => {
        const sorted = [...movies].sort((a, b) => b.rating - a.rating);
        setMovies(sorted);
    };

    return(
        <div className="container">
            <h1>Min filmlista</h1>
            <AddMovieForm onAddMovie={addMovie}/>
            <h2> Filmer</h2>
            <ul>
                <MovieList movies={movies} onDelete={deleteMovie}/>
            </ul>
            <div>
                <OrderByAphaButton onSort={sortByTitle}/>
                <OrderByGradeButton onSort={sortByGrade}/>
            </div>
        </div>
    )


}
export default MovieApp;