import React from "react";
import Navbar from "./Navbar";
import Events from "./Events";
import Booking from "./Booking";
import Footer from "./Footer";
function EventsApp(){
    return(
        <>
        <Navbar/>
        <Events/>
        <Booking/>
        <Footer/>
        </>
    )
}
export default EventsApp