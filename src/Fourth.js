import React from "react";

export default function Fourth() {
  return (
    <div>
      <a href="/search">
        <img src="fourth.jpeg" className="top-image" />
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
        <p className="Heading-Large">"We Love You"</p>
      </div>
      <div className="pics">
        <img src="AS-pic.jpeg" className="pic3" />
        <img src="AS-pic 2.jpeg" className="pic2" />
      </div>
      <div className="Info">
        In her son, Rishabh's words, "We love you more than you can imagine. We
        feel so lucky and grateful to have you in our lives. You are the best
        mother the world could ever imagine. Whatever we have achieved in our
        lives, whatever progress we have made, you have played a very crucial
        role in making that possible and we couldn't have done it without you.
        Thank you so much for everything. May God keep you happy and smiling
        always."
      </div>
    </div>
  );
}
