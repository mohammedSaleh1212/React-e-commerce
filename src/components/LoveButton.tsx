import  { useState } from 'react'

const LoveButton = () => {
    const [clicked, setClicked] = useState(false)
    return (

            <i className={`love-icon bi bi-heart${clicked ? '-fill' : ''}`} style={{ color: 'black' }} onClick={() => {
                setClicked(!clicked)
            }}>

            </i>

   

    )
}

export default LoveButton