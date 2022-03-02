import React, { useState, useEffect } from "react";
import axios from "./../axios";
import styled from "styled-components";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_image_url = "https://image.tmdb.org/t/p/original/";

function MovieRow({ title, fetchURL, isLargeImage }) {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchURL);
            setMovie(request.data.results);
            return request;
        };
        fetchData();
    }, [fetchURL]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(
                movie?.title || movie?.name || movie?.original_name || ""
            ).then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            });
        }
    };

    return (
        <Container>
            <h2>{title}</h2>
            <MoviePoster>
                {movies.map((movie) => {
                    return (
                        <Poster
                            onClick={() => handleClick(movie)}
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
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
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
    cursor: pointer;
    &:hover {
        transform: scale(1.08);
    }
`;

export default MovieRow;
