import React from "react";
export default function Landing() {
  return (
    <div>
      <div id="navbar">
        <img src="Bars.jpeg" id="bars" />
        <div id="nav-element-1">ALL</div>
        <div id="nav-element-2">IMAGES</div>
        <i className="fa fa-th"></i>
        <img src="Hrishita pic.webp" id="profile-pic" />
      </div>
      <br />
      <br />
      <br />
      <div>
        <center>
          <a href="/celebration">
            <img src="Google Logo Final Edit.jpeg" id="google-logo" />
          </a>
        </center>
      </div>

      <a className="d-inline-flex" href="/search">
        <img src="Search Bar.jpeg" id="google-search" />
      </a>
    </div>
  );
}
