  import "../App.css"
  import { Home } from "./Home"

 export  const Navbar = ()=>{

    return (
        <>
           <header className="l-header">
      <nav className="nav bd-grid">
        <div>

          <a href="#home" className="nav-logo"
            ><img   src="https://t3.ftcdn.net/jpg/03/11/82/20/360_F_311822099_rnFbbp9Cca68DnC0hOVVLxvRqDwJ8oOq.jpg" alt="s"
          /></a>
        </div>

        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link home active">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link about">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link skills">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link projects">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="nav-toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
        </>
    )
 }