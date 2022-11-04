import './topbar.scss';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar'}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className={'logo'}>
            portfolio.
          </a>
          <div className="itemContainer">
            {/* <Person className={"icon"}/> */}
          </div>
        </div>
        <div className="right">
          <div className="nav">
            <a href="#intro">HOME</a>
            <a href="#portfolio">PROJECTS</a>
            <a href="#contact">CONTACT</a>
          </div>
          <div
            className={'hamburger ' + (menuOpen && 'active')}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
