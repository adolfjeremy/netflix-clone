import React, { useState, useEffect } from "react";
import axios from "./../axios";
import styled from "styled-components";

const base_image_url = "https://image.tmdb.org/t/p/original/";

function MovieRow({ title, fetchURL, isLargeImage }) {
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
                            className={isLargeImage ? "large-image" : ""}
                            key={movie.id}
                            src={`${base_image_url}${
                                isLargeImage
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
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
    h2 {
        margin: 0 4% 0.5em 4%;
        font-size: 1.4vw;
        line-height: 1.25vw;
    }
`;
const MoviePoster = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 20px 4%;
    border-radius: 8px;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Poster = styled.img`
    object-fit: contain;
    margin-right: 10px;
    width: 100%;
    max-height: 150px;
    border-radius: 8px;
    transition: transform 250ms;
    &:hover {
        transform: scale(1.08);
    }
`;

export default MovieRow;
