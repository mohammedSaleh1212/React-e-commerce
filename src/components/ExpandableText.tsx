import  { useState } from 'react'
interface Props {
  text:string
}

const ExpandableText = ({text}:Props) => {
    const [expanded,setExpanded] = useState(false)
    const limit = 200
    if(text.length <= limit)
  return (
    <p>{text}</p>
  )
  const summary = !expanded ? text.substring(0,limit) + '...' : text 
return(
    <>
    <p>
        {summary }
        <button 
        className="btn btn-first btn-more ms-2"
         onClick={() => {
        // event.preventDefault()
        setExpanded(!expanded)
        
    }}>
        {expanded ? 'Read Less' : 'Read More'}
 
    </button>
    
    </p>

    </>
)
}

export default ExpandableText