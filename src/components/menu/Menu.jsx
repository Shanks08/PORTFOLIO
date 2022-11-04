import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
         <li onClick={()=>setMenuOpen(!menuOpen)}>
            <a href="#intro">HOME</a>
         </li>
         <li onClick={()=>setMenuOpen(!menuOpen)}>
            <a href="#portfolio">PORTFOLIO</a>
         </li>
         <li onClick={()=>setMenuOpen(!menuOpen)}>
            <a href="#contact">CONTACT</a>
         </li>
      </ul>
    </div>
  )
}
