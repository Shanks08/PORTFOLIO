import './portfolio.scss';
import { Projects } from '../../data';

export default function Portfolio() {
  const data = Projects;

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      {/* <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul> */}
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target="_blank">
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
