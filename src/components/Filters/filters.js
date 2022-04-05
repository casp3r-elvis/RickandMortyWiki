import React from 'react'
import Gendeer from './Category/Gendeer'

import Species from './Category/Species'
import Status from './Category/Status'

const filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {
  let clear = ()=>{
    setStatus("");
     setPageNumber("");
      setGender("");
       setSpecies("")
       window.location.reload(false)
  }
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fs-4 mb-2 fs-bold">Filter</div>
      <div 
      onClick={clear}
      style={{cursor: "pointer"}} className=" 
      text-center text-decoration-underline text-primary mb-4"> 
      Clear Filter
      </div>
    <div className="accordion" id="accordionExample">
 
  
  
 
  
</div>
<Status setStatus={setStatus} setPageNumber={setPageNumber}/>  
  <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
  <Gendeer setGender={setGender} setPageNumber={setPageNumber}/>
    </div>
    
  )
  
}

export default filters