import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";


const Detail = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState({}) //object형태
    const getMovie = async () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzM1NDc3MjQ0M2FlODIyNTUxNDQ4MjMwMzZmNDhlOCIsInN1YiI6IjY0NjlhODE1MDA2YjAxMDE4OTU4ZDlhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RJDHcyvrIfSlqIBCcK95nTmRqfDhBtjpbp7IcepDTFY'
                }
            };
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            setMovie(result.data)
        } catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div>

            <h1>타이틀 : {movie.title}</h1>

        </div>
    );
};

export default Detail;