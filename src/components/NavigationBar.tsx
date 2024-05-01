import { useState } from 'react'
import '../styles/NavigationBar.css'


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


      <nav className="navbar navbar-expand-lg pb-0">
        <div className="container">
          <a className="navbar-brand" href="#homePage"><img src={imagePath} alt={brandName} /></a>
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

                    <a
                      className={
                        selectedIndex == index
                          ? "nav-link active fw-bold"
                          : "nav-link"

                      }

                      href={navItem.url}
                    >
                      {navItem.title}
                    </a>
                  </li>
                  :



                  <li className="nav-item dropdown" key={navItem.title}>
                    <a className="nav-link dropdown-toggle d-flex gap-2 align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {navItem.title}
                    </a>
                    <ul className="dropdown-menu">

                      {navItem.subMenu.map(subItem =>

                        <li key={subItem.title}><a className="dropdown-item" href={subItem.url}>{subItem.title}</a></li>

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