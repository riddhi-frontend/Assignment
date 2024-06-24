import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Error()
{
    return (
        <>
        <Navbar />
        <Container className="mt-5 p-4 shadow bg-black">
            <h1 className="text-white">Page Not Found 404 errors</h1>
            <img src="https://cdn.dribbble.com/users/330174/screenshots/4430752/dribbble_o2d.gif" alt="404" className="img-fluid w-50" />
            <p className="text-white">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>

        </Container>
        <Footer />
        </>
    )
} 

export default Error