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
          // <a href={d.link} target="_blank">
          <div className="item" key={d.id}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
            <div className={'item_link_cont'}>
              <a href={d.link1} target="_blank">
                LINK 1
              </a>
              |
              <a href={d.link2} target="_blank">
                LINK 2
              </a>
            </div>
            <div className={'item_github_cont'}>
              <a href={d.github} target="_blank">
                GITHUB
              </a>
            </div>
          </div>
          // </a>
        ))}
      </div>
    </div>
  );
}
