import React from "react";
import '../css/home.css'

const SpringBreak = () => {

    var countDownDate = new Date("Mar 11, 2022 12:00:00").getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;


        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);


        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            
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
                <p className="countdown spring" id="demo"></p>
                <h4>Apartment Shopping!!</h4>
            </div>
        </div>
    )
}

export default SpringBreak;