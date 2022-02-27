import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "./../axios";
import styled from "styled-components";

function Header() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        };
        fetchData();
    }, []);
    return (
        <Container
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            }}
        >
            <ContentContainer>
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                <p>{movie?.overview}</p>
                <ButtonContainer>
                    <PlayButton>Play</PlayButton>
                    <MyListButton>My List</MyListButton>
                </ButtonContainer>
            </ContentContainer>
            <FadeContainer></FadeContainer>
        </Container>
    );
}

const Container = styled.header`
    position: relative;
    object-fit: contain;
    height: 90vh;
    margin-bottom: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    display: flex;
    align-items: center;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(20, 20, 20, 0.3);
    }
`;
const ContentContainer = styled.div`
    position: relative;
    margin-left: 4%;
    width: 36%;
    @media (min-width: 1025px) {
        width: 36%;
    }
    h1 {
        font-size: 3rem;
        font-weight: 700;
        padding-bottom: 0.3rem;
        color: #fff;
    }
    p {
        width: 100%
        line-height: normal;
        font-size: 1.3vw;
        font-weight: 400;
        color: #fff;
    }
`;

const ButtonContainer = styled.div`
    margin-top: 1.5vw;
    position: relative;
    diplay: flex;
    line-height: 88%;
`;
const PlayButton = styled.button`
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0.8rem;
    background-color: #fff;
    border: none;
    font-size: 1.2vw;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.75);
    }
`;
const MyListButton = styled(PlayButton)`
    color: #fff;
    background-color: rgba(109, 109, 110, 0.9);
    &:hover {
        background-color: rgba(109, 109, 110, 0.4);
    }
`;

const FadeContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 7.4rem;
    background-image: linear-gradient(
        180deg,
        transparent,
        rgba(37, 37, 37, 0.61),
        #141414
    );
`;

export default Header;
