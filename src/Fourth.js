import React from "react";

export default function Fourth() {
  return (
    <div>
      <a href="/search">
        <img src="fourth.jpg" className="top-image" />
      </a>
      <img src="Hrishita Pic.webp" className="hrishita-pic" />
      <div>
        <p className="Heading-Large">"I Love You"</p>
      </div>
      <div>
        <center>
          <video src="HR-video.mp4" className="video" autoPlay loop muted />
        </center>
      </div>
      <div className="Info">
        In Rishabh's words, "My love for you is immeasurable. You're the best
        thing that ever happened to me. These 3 years have been the happiest
        part of my life and I can't wait to spend the rest of my life with you.
        Happy 3 Years Hrishita, I love you."
      </div>
    </div>
  );
}
