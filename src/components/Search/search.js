import React from 'react'
import Styles from './search.module.scss'
const search = ({setSearch, setPageNumber}) => {
  return (
   <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5'>
       <input
       onChange={(e)=>{
           setPageNumber(1);
           setSearch(e.target.value);
       }}
        placeholder='search for Characters ' type="text" className={Styles.input}/>
       <button 
       onClick={(e)=>{
           e.preventDefault();
       }}
       className={`${Styles.btn}btn btn-primary fs-5`}>Search</button>
   </form>
  )
}

export default search