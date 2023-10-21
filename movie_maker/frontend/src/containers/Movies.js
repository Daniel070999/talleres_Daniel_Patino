import React from "react";
import SingleMovie from "../components/SingleMovie";

const movies = [
    { name: 'John Wick 1', genre: 'Action', year: 2015 },
    { name: 'John Wick 2', genre: 'Action', year: 2016 },
    { name: 'John Wick 3', genre: 'Action', year: 2018 },
    { name: 'John Wick 4', genre: 'Action', year: 2019 },
    { name: 'John Wick 5', genre: 'Action', year: 2020 },
    { name: 'John Wick 6', genre: 'Action', year: 2021 },
]

const Movies = () => {
    return (
        <div className="movies">
            {movies.map((data) => {
                return <SingleMovie
                    movieName={data.name}
                    movieGenre={data.genre}
                    movieYear={data.year}
                />
            })}
        </div>
    )
}

export default Movies;