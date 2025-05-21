import React from "react";
import star from '../images/star.png';
import del from '../images/delete.png';

const MovieItem = ({movie, onDelete}) => {
    let stars = [];
    for (let i = 1; i <= movie.rating; i++) {
        stars.push(
            <img src={star} alt="Star"/>
        );
    }

    return(
        <li className="d-flex mb-2">
            <span className="me-2">{movie.title} </span>
            {stars}
            <img src={del} alt="Delete" onClick={() => onDelete(movie.id)} />
        </li>
    );
};

export default MovieItem;
