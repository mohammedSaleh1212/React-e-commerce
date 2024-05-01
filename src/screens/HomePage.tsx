import React from 'react'
import NavigationBar from '../components/NavigationBar'
import logo from '../assets/react.svg'
import { menuItemsData } from '../data/menuItemsData'


const HomePage = () => {
  return (
    <NavigationBar  brandName='Jani King' imagePath={logo} navItems={menuItemsData}  />
)
}

export default HomePage