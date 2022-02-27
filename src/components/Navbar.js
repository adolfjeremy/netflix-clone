import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Navbar() {
    const [navbarStatus, setNavbarStatus] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100
                ? setNavbarStatus(true)
                : setNavbarStatus(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <Container show={navbarStatus}>
            <AppLogo href="/">
                <img
                    src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                    alt="Netflix Clone"
                />
                <span>Clone by Jeremy</span>
            </AppLogo>
            <ProfileImageContainer>
                <Account>
                    <img
                        src="https://occ-0-1981-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFC6l7pcqKJdIX7RCNbBpOxvRnBhCkn1NxSxWM0xScvSvgynXUN-epFc_09AgSWmIC12b8jaVdiCSDV54-J4dHco9MA.png"
                        alt="Jeremy Account"
                    />
                </Account>
            </ProfileImageContainer>
        </Container>
    );
}
const Container = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 41px;
    padding: 0 4%;
    z-index: 10;
    background: ${(props) => (props.show ? "rgb(20, 20, 20);" : "")};
    transition: background 250ms ease-in;
    @media (min-width: 1025px) {
        height: 68px;
    }
`;

const AppLogo = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    height: 25px;
    cursor: pointer;
    img {
        height: 25px;
    }
    span {
        position: absolute;
        bottom: -12px;
        left: 3px;
        font-size: 11px;
        vertical-align: bottom;
        color: #fff;
    }
`;

const ProfileImageContainer = styled.div``;
const Account = styled.div`
    img {
        width: 32px;
        height: 32px;
    }
`;

export default Navbar;
