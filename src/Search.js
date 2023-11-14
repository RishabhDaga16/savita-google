import React from "react";

export default function Search() {
  return (
    <div>
      <div id="search">
        <a href="/">
          <img src="Back aroow.png" id="arrow" />
        </a>
      </div>
      <center>
        <div class="card card-body">
          <p>
            <a class="dropdown-item" href="/first">
              <img src="Magnifying Glass.png" className="magnifying-glass" />
              Who is the most beautiful woman
              <br /> in the world
            </a>
          </p>
          <p>
            <a class="dropdown-item" href="/second">
              <img src="Magnifying Glass.png" className="magnifying-glass" />
              What is Savita's role in her family
            </a>
          </p>
          <p>
            <a class="dropdown-item" href="/fourth">
              <img src="Magnifying Glass.png" className="magnifying-glass" />
              What does Savita's family want to
              <br /> say to her today
            </a>
          </p>
          <p>
            <a class="dropdown-item" href="/fifth">
              <img src="Magnifying Glass.png" className="magnifying-glass" />
              What does Team Google want to say
              <br />
              to Savita today
            </a>
          </p>
          <p>
            <a class="dropdown-item" href="/seventh">
              <img src="Magnifying Glass.png" className="magnifying-glass" />
              Finally, how did Rishabh and <br />
              Shashank do all this
            </a>
          </p>
        </div>
      </center>
    </div>
  );
}
