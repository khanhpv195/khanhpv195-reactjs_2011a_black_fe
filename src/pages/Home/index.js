import React from 'react';
import Main from './../../components/organisms/Main';
import { useCookies } from "react-cookie";

function Home(props) {
    const [cookies, setCookie] = useCookies([""]);
    return (
        <Main>
            <h1>Day la home {cookies}</h1>
        </Main>
    );
}

export default Home;