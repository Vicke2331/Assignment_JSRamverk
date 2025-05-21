import React from "react";
import star from  "../images/star.png";
import del from "../images/delete.png";

const MovieList = ({movies, onDelete}) => {

    return(
        <ul className="list-unstyled">
            {movies.map((movie) => {
                let stars = [];
                for (let i = 1; i <= movie.rating; i++) {
                    stars.push(
                        <img src={star} alt="Star" style={{ width: '20px', marginLeft: '4px' }}/>
                    );
                }
                return(
                    <li className="d-flex justify-content-between align-items-center bg-light p-2 mb-2 rounded shadow-sm">
                        <span>{movie.title}</span>
                        <div>
                            {stars}
                            <img src={del} alt="Delete movie" onClick={() => onDelete(movie.id)} style={{ width: '20px', cursor: 'pointer', marginLeft: '10px' }}/>
                        </div>
                    </li>
                );

            })}
        </ul>
    );
};

export default MovieList;


