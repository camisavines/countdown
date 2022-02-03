import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../routes";
import '../css/home.css'

const Home = () => {
    var countDownDate = new Date("May 7, 2022 12:00:00").getTime();
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
                <h1>Graduation!</h1>

                <div className="countdown home">
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


                <h4>Camisa is graduating from college!!!</h4>

            </div>

            <div style={{position: "fixed", bottom: "25px", right:"25px"}}>
                <Link to={ROUTES.SPRING}>
                    <button type="button" className="btn btn-primary btn-floating" style={{height: "60px", width: "60px", borderRadius: "50%", backgroundColor: "rgba(255, 0, 0, 0.25)"}}>
                        <i class="material-icons">airplanemode_active</i>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;