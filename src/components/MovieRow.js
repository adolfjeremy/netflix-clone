import React, { useState, useEffect } from "react";
import axios from "./../axios";
import styled from "styled-components";

const base_image_url = "https://image.tmdb.org/t/p/original/";

function MovieRow({ title, fetchURL }) {
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchURL);
            setMovie(request.data.results);
            return request;
        };
        fetchData();
    }, [fetchURL]);
    return (
        <Container>
            <h2>{title}</h2>
            <MoviePoster>
                {movies.map((movie) => {
                    return (
                        <Poster
                            key={movie.id}
                            src={`${base_image_url}${movie.poster_path}`}
                            alt={movie.name}
                        />
                    );
                })}
            </MoviePoster>
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
`;
const MoviePoster = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 20px;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Poster = styled.img`
    object-fit: contain;
    margin-right: 10px;
    width: 100%;
    max-height: 100px;
    transition: transform 250ms;
    &:hover {
        transform: scale(1.08);
    }
`;

export default MovieRow;
