import React, { useState } from "react";
import MyNav from "../shared/nav";
import '../css/themes.css'

const Home = () => {
    var countDownDate = new Date("August 10, 2022 23:59:00").getTime();
    const [daysLeft, setDays] = useState(0);
    const [hoursLeft, setHours] = useState(0);
    const [minutesLeft, setMinutes] = useState(0);
    const [secondsLeft, setSeconds] = useState(0);


    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;


        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);


        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);


    return (
        <div className="countdown-container home">
            <div>
                <h1>Bride and Boujee Crew</h1>

                <div className="countdown home mw-75-sm">
                    <div className="row" id="demo">
                        <div className="col-xs-3">
                            <h1>{daysLeft}</h1> 
                            <p>Days</p>
                        </div>
                        <div className="col-xs-3">
                            <h1>{hoursLeft}</h1> 
                            <p>Hours</p>
                        </div>
                        <div className="col-xs-3">
                            <h1>{minutesLeft}</h1> 
                            <p>Minutes</p>
                        </div>
                        <div className="col-xs-3">
                            <h1>{secondsLeft}</h1> 
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>


                <h3>Click the menu button to view the trip itinerary and details.</h3>
                <h5>Yes, Camille's kid is smart af.</h5>

                <MyNav color='rgb(255,146,72)' />

            </div>
        </div>
    )
}

export default Home;