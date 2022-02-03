import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../routes";
import '../css/home.css'

const SpringBreak = () => {
    var countDownDate = new Date("Mar 11, 2022 12:00:00").getTime();

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


        // Output the result in an element with id="demo"
        // document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);


    return (
        <div className="countdown-container spring">
            <div>
                <h1>Spring Break!</h1>

                <div className="countdown spring">
                    <div className="row" id="demo">
                        <div className="col-sm-3">
                            <h1>{daysLeft}</h1> 
                            <p>Days</p>
                        </div>
                        <div className="col-sm-3">
                            <h1>{hoursLeft}</h1> 
                            <p>Hours</p>
                        </div>
                        <div className="col-sm-3">
                            <h1>{minutesLeft}</h1> 
                            <p>Minutes</p>
                        </div>
                        <div className="col-sm-3">
                            <h1>{secondsLeft}</h1> 
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>


                <h4>Apartment Shopping!!</h4>

                <div style={{position: "fixed", bottom: "25px", right:"25px"}}>
                    <Link to={ROUTES.HOME}>
                        <button type="button" className="btn btn-primary btn-floating" style={{height: "60px", width: "60px", borderRadius: "50%", backgroundColor: "rgba(255, 165, 0, 0.75)"}}>
                            <i class="material-icons">class</i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SpringBreak;