import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { HashLink as Link } from 'react-router-hash-link'
import * as listAllMovies from '../containers/Movies'


const AddMovie = () => {
    const addNewMovie = gql`
        mutation AddNewMovie($name: String!, $genre: String!, $year: Int!) {
            addMovie(name: $name, genre: $genre, year: $year) {
                name
                genre
                year
            }
        }
    `;

    const [movieName, setMovieName] = useState('');
    const [movieGenre, setMovieGenre] = useState('');
    const [movieYear, setMovieYear] = useState('');

    const [newMovieData, { loading, error }] = useMutation(addNewMovie);

    const submitMovie = (e) => {
        e.preventDefault();
        console.log('Add movie');
        newMovieData({
            variables: {
                name: movieName,
                genre: movieGenre,
                year: parseInt(movieYear) 
            },
            refetchQueries: [
                {
                    query: listAllMovies.listAllMovies,
                },
            ],
        });
    };

    if (loading) return 'Loading movie';
    if (error) return `No se pudo agregar: ${error.message}`;

    return (
        <div className='addMovie' id="addNewMovie">
            <form onSubmit={submitMovie}>
                <input type="text" placeholder='Name' required onChange={(e) => setMovieName(e.target.value)} />
                <input type="text" placeholder='Genre' required onChange={(e) => setMovieGenre(e.target.value)} />
                <input type="number" placeholder='Year' onChange={(e) => setMovieYear(e.target.value)} />

                <button>Agregar película</button>
            </form>
            <div className='top'>
                <Link smooth to="#header" className='top-button'>
                    Volver arriba
                </Link>
            </div>
        </div>
    );
};

export default AddMovie;
