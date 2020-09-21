import React from 'react';

import './styles/Masthead.css';

import { Link } from "react-scroll";

export default function Masthead() {
    return (
        <div className="masthead">
        <div className="container" style={{height:"100vh"}}>
          <div className="row h-100 align-items-center">
            <div className="col text-center title-wrapper">

              <h1 className="masthead-title">
                <span style={{color:"#aa1638"}}>STARTUP.</span>
                <br/>
                <span style={{color:"#e45315"}}>BUILD.</span>
                <br/>
                <span style={{color:"#2cb3ab"}}>SUSTAIN.</span>
              </h1>
              
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <svg className="arrow" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640"><defs><path d="M319.83 578.67C142.09 400.92 43.35 302.17 23.61 282.42C18.08 277.08 9.27 277.23 3.93 282.76C-1.27 288.15 -1.27 296.7 3.93 302.09C34.54 332.7 279.4 577.55 310.01 608.16C315.44 613.59 324.25 613.59 329.68 608.16C360.29 577.55 605.15 332.7 635.75 302.09C641.09 296.56 640.94 287.75 635.41 282.42C630.02 277.21 621.47 277.21 616.08 282.42C616.08 282.42 517.33 381.17 319.83 578.67Z" id="bcNikV5Jo"></path><path d="M319.83 328.24C142.09 150.49 43.35 51.74 23.61 31.99C18.08 26.65 9.27 26.81 3.93 32.33C-1.27 37.73 -1.27 46.27 3.93 51.67C34.54 82.27 279.4 327.13 310.01 357.74C315.44 363.17 324.25 363.17 329.68 357.74C360.29 327.13 605.15 82.27 635.75 51.67C641.28 46.33 641.43 37.52 636.09 31.99C630.76 26.47 621.95 26.31 616.42 31.65C616.31 31.76 616.19 31.88 616.08 31.99C616.08 31.99 517.33 130.74 319.83 328.24Z" id="b9kEhwA6I"></path><path d="M309.98 608.19C279.37 577.58 34.51 332.72 3.91 302.12C-1.43 296.59 -1.28 287.78 4.25 282.44C9.64 277.24 18.19 277.24 23.58 282.44C43.33 302.19 142.08 400.93 319.83 578.67C497.56 400.92 596.3 302.17 616.05 282.42C621.58 277.08 630.39 277.23 635.72 282.76C640.93 288.15 640.93 296.7 635.72 302.09C605.12 332.7 360.26 577.56 329.65 608.16C327.05 610.77 323.52 612.24 319.83 612.25C316.14 612.26 312.59 610.8 309.98 608.19Z" id="bp65jqJMJ"></path><path d="M309.98 357.77C279.37 327.16 34.51 82.3 3.91 51.69C-1.43 46.17 -1.28 37.36 4.25 32.02C9.64 26.81 18.19 26.81 23.58 32.02C43.33 51.77 142.08 150.51 319.83 328.24C497.56 150.49 596.3 51.74 616.05 31.99C621.39 26.47 630.2 26.31 635.73 31.65C641.25 36.99 641.4 45.8 636.07 51.32C635.96 51.44 635.84 51.55 635.73 51.67C605.12 82.27 360.26 327.13 329.65 357.74C327.05 360.35 323.52 361.82 319.83 361.83C316.14 361.84 312.59 360.38 309.98 357.77Z" id="fb6nRQjw6"></path></defs><g><g><g><use xlinkHref="#bcNikV5Jo" opacity="1" fillOpacity="1"></use><g><use xlinkHref="#bcNikV5Jo" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="0"></use></g></g><g><use xlinkHref="#b9kEhwA6I" opacity="1"  fillOpacity="1"></use><g><use xlinkHref="#b9kEhwA6I" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="0"></use></g></g><g><use xlinkHref="#bp65jqJMJ" opacity="1" fillOpacity="1"></use><g><use xlinkHref="#bp65jqJMJ" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="0"></use></g></g><g><use xlinkHref="#fb6nRQjw6" opacity="1" fillOpacity="1"></use><g><use xlinkHref="#fb6nRQjw6" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="0"></use></g></g></g></g></svg>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    );
}