import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import logo from '../assets/react.svg'
import { menuItemsData } from '../data/menuItemsData'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div>
        <NavigationBar  brandName='Jani King' imagePath={logo} navItems={menuItemsData}  />

      {isRouteErrorResponse(error) ? <p style={{marginTop:'150px'}}>this page does not exist</p> : 'sorry unexpected error occured'}
    </div>
  )
}

export default ErrorPage