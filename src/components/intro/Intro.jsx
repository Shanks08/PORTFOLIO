import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Software Developer', 'Designer', 'Problem Solver'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      {/* <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div> */}
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Souryadeep Bhattacharya,</h1>
          <h3>
            a <span ref={textRef}></span>
          </h3>
        </div>
        <div className="resume">
          <a href="assets/Souryadeep-Bhattacharya-Resume.pdf">
            RESUME <ArrowCircleDownIcon className={'icon'} />
          </a>
        </div>
        {/* <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a> */}
      </div>
    </div>
  );
}
