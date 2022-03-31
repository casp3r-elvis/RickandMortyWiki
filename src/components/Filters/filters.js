import React from 'react'

const filters = () => {
  return (
    <div className="col-3">
      <div className="text-center fs-4 mb-2 fs-bold">Filter</div>
      <div style={{cursor: "pointer"}} className=" text-center text-decoration-underline text-primary"> Clear Filter</div>
    </div>
  )
}

export default filters