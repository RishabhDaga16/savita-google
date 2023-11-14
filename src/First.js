import React from "react";

export default function First() {
  return (
    <div>
      <a href="/search">
        <img src="first.jpeg" className="top-image" />
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
        <p className="Heading">Savita Daga</p>
      </div>
      <div className="pics">
        <img src="Hrishita-pic.jpeg" className="pic" />
        <img src="Rishabh-pic.jpeg" className="pic" />
      </div>
      <div className="Info">
        Savita Daga, a resident of Kolkata, is a mother of two and is married to
        Mr. Anand Daga. According to the recently concluded poll on Instagram,
        she has been voted as the Most Beautiful Woman in the world. Today, on
        15th November 2023, she turns 46!
      </div>
    </div>
  );
}
