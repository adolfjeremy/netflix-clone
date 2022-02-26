import React from "react";
import MovieRow from "../components/MovieRow";
import requests from "../requests";

function Home() {
    return (
        <>
            <MovieRow
                title="Netflix Original"
                fetchURL={requests.fetchNetflixOriginal}
            />
            <MovieRow title="Trending Now" fetchURL={requests.fetchTrending} />
            <MovieRow
                title="Top Rated"
                fetchURL={requests.fetchTopRatedMovies}
            />
            <MovieRow
                title="Action Movies"
                fetchURL={requests.fetchActionMovies}
            />
            <MovieRow
                title="Comedy Movies"
                fetchURL={requests.fetchComedyMovies}
            />
            <MovieRow
                title="Horror Movies"
                fetchURL={requests.fetchHorrorMovies}
            />
            <MovieRow
                title="Romance Movies"
                fetchURL={requests.fetchRomanceMovies}
            />
            <MovieRow
                title="Documentaries"
                fetchURL={requests.fetchDocumentaries}
            />
        </>
    );
}

export default Home;
