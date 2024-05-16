import { useState } from 'react'
import '../styles/NavigationBar.css'
import { Link } from 'react-router-dom'


interface navItem {
  title: string
  url: string
  subMenu?: navItem[]
}
interface Props {
  brandName: string,
  imagePath: string,
  navItems: navItem[]

}

const NavigationBar = ({ brandName, imagePath, navItems }: Props) => {

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <header>


      <nav className="navbar navbar-expand-lg  fixed-top bg-white shadow">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src={imagePath} alt={brandName} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className=" navbar-nav  gap-5">
              {navItems.map((navItem, index) => (
                !navItem.subMenu ?
                  <li
                    key={navItem.title}
                    className='nav-item'
                    onClick={() => setSelectedIndex(index)}
                  >

                    <Link
                      className={
                        selectedIndex == index
                          ? "nav-link active fw-bold"
                          : "nav-link"

                      }

                      to={navItem.url}
                    >
                      {navItem.title}
                    </Link>
                  </li>
                  :



                  <li className="nav-item dropdown" key={navItem.title}>
                    <Link className="nav-link dropdown-toggle d-flex gap-2 align-items-center" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {navItem.title}
                    </Link>
                    <ul className="dropdown-menu">

                      {navItem.subMenu.map(subItem =>

                        <li key={subItem.title}><Link className="dropdown-item" to={subItem.url}>{subItem.title}</Link></li>

                      )}


                    </ul>
                  </li>


              ))}
            </ul>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar