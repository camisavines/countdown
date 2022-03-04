import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as ROUTES from "../routes";

const MyNav = ({ color }) => {
  const location = useLocation();

  return (
    <div className="mynav">
      <Link to={ROUTES.HOME}>
        <button 
          type="button" 
          style={{backgroundColor: `${color}`}}
          className={`btn btn-primary btn-floating ${location.pathname === ROUTES.HOME ? "hide" : ""}`} 
        >
          <i class="material-icons">class</i>
        </button>
      </Link>
      
      <Link to={ROUTES.SPRING}>
        <button 
          type="button" 
          style={{backgroundColor: `${color}`}}
          className={`btn btn-primary btn-floating ${location.pathname === ROUTES.SPRING ? "hide" : ""}`} 
        >
          <i class="material-icons">airplanemode_active</i>
        </button>
      </Link>

      <Link to={ROUTES.CONCERT}>
        <button 
          type="button" 
          style={{backgroundColor: `${color}`}}
          className={`btn btn-primary btn-floating ${location.pathname === ROUTES.CONCERT ? "hide" : ""}`} 
        >
          <i class="material-icons">music_note</i>
        </button>
      </Link>
      
      <Link to={ROUTES.WORK}>
      <button 
          type="button" 
          style={{backgroundColor: `${color}`}}
          className={`btn btn-primary btn-floating ${location.pathname === ROUTES.WORK ? "hide" : ""}`} 
        >
          <i class="material-icons">work</i>
        </button>
      </Link>

    </div>
  )
}

export default MyNav;