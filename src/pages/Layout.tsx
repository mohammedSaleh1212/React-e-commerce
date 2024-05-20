import logo from '../assets/react.svg'
import { menuItemsData } from '../data/menuItemsData'
import NavigationBar from '../components/NavigationBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    
    <NavigationBar  brandName='Jani King' imagePath={logo} navItems={menuItemsData}  />
    <div className="outlet-container" style={{paddingTop:'100px',paddingBottom:'50px'}}>

    <Outlet />
    </div>
    </>

  )
}

export default Layout