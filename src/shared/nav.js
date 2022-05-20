import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import * as ROUTES from "../routes";

const MyNav = ({ color }) => {
  // const location = useLocation();

  return (
    <div className="mynav">
      {/* <Link to={ROUTES.HOME}>
        <button 
          type="button" 
          style={{backgroundColor: `${color}`}}
          className={`btn btn-primary btn-floating ${location.pathname === ROUTES.HOME ? "hide" : ""}`} 
        >
          <i class="material-icons">class</i>
        </button>
      </Link> */}

      {/* <Link to={ROUTES.CONCERT}>
        <button 
          type="button" 
          style={{backgroundColor: `${color}`}}
          className={`btn btn-primary btn-floating ${location.pathname === ROUTES.CONCERT ? "hide" : ""}`} 
        >
          <i class="material-icons">music_note</i>
        </button>
      </Link> */}
      
      {/* <Link to={ROUTES.WORK}>
      <button 
          type="button" 
          style={{backgroundColor: `${color}`}}
          className={`btn btn-primary btn-floating ${location.pathname === ROUTES.WORK ? "hide" : ""}`} 
        >
          <i class="material-icons">work</i>
        </button>
      </Link> */}


      <a href="https://rattle-yard-c3b.notion.site/Miami-Itinerary-13ddbb4a49ea4155ac34a0efd58dd5ff">
        <button 
          type="button" 
          style={{backgroundColor: `${color}`}}
          className="btn btn-primary btn-floating" 
        >
          <i class="material-icons">menu</i>
        </button>
      </a>

    </div>
  )
}

export default MyNav;