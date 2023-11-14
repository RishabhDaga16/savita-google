import React from "react";

export default function Second() {
  return (
    <div>
      <a href="/search">
        <img src="second.jpeg" className="top-image" />
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
        <p className="Heading">
          She's the glue which holds the family together
        </p>
        <img src="Family pic.jpeg" className="family-pic" />
      </div>
      <div className="Info">
        Throughout the years, she has kept her family at the top of the priority
        list and we think her family members will agree that she's the greatest
        gift they could've asked God for.
      </div>
    </div>
  );
}
