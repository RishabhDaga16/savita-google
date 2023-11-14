import React from "react";

export default function Celebration() {
  return (
    <div>
      <a href="/search">
        <img src="celebration.jpeg" className="top-image" />
      </a>
      <button type="button" className="btn btn-primary login">
        Sign In
      </button>
      <a href="/">
        <img
          src="Google Logo Transparent.png"
          className="google-landing-redirect"
        />
      </a>
      <div>
        <p className="Heading">Savita Daga's 46th Birthday!</p>
        <div className="pics">
          <img src="HR-pic1.jpeg" className="pic" />
          <img src="HR-pic2.jpeg" className="pic" />
        </div>
        <p className="Heading">
          Happy Birthday Mrs. Daga! We hope you have a great day!
        </p>
      </div>
    </div>
  );
}
