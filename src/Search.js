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
              Who are Hrishita and Rishabh
            </a>
          </p>
          <p>
            <a class="dropdown-item" href="/second">
              <img src="Magnifying Glass.png" className="magnifying-glass" />
              When and where did Hrishita and <br />
              Rishabh meet for the first time
            </a>
          </p>
          <p>
            <a class="dropdown-item" href="/third">
              <img src="Magnifying Glass.png" className="magnifying-glass" />
              When did Hrishita and Rishabh <br />
              start dating
            </a>
          </p>
          <p>
            <a class="dropdown-item" href="/fourth">
              <img src="Magnifying Glass.png" className="magnifying-glass" />
              What does Rishabh want to say
              <br /> to Hrishita today
            </a>
          </p>
          <p>
            <a class="dropdown-item" href="/fifth">
              <img src="Magnifying Glass.png" className="magnifying-glass" />
              What does Team Google want to say
              <br />
              to Hrishita and Rishabh today
            </a>
          </p>
          <p>
            <a class="dropdown-item" href="/sixth">
              <img src="Magnifying Glass.png" className="magnifying-glass" />
              CAT 2023
            </a>
          </p>
          <p>
            <a class="dropdown-item" href="/seventh">
              <img src="Magnifying Glass.png" className="magnifying-glass" />
              Finally, how did Rishabh do all this
            </a>
          </p>
        </div>
      </center>
    </div>
  );
}
