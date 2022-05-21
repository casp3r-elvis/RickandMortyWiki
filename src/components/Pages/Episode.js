import React, { useEffect, useState } from 'react';

import Cards from '../Cards/cards';
import InputGroup from '/Users/esikeelvis/WebstormProjects/reactwiki/src/components/InputGroup.js'

const Episode = () => {

  let [id, setID] = useState(1);
  let [info, setInfo] = useState([])
  let [results, setResult] = useState([])
  let {air_date, name} = info
  let api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect (()=>{

   (async function(){
     let data = await fetch(api).then((res) =>res.json());
     setInfo(data);

     let ch = await Promise.all(
       data.characters.map((x)=>{
         return fetch(x).then(res => res.json());
       })
     )
     setResult(ch)
   })()
   
  },[api]);

return(
 <div className='Container '>
  
  <div className="row mb-4 ">
    <h1 className="text-center mb-4">
      Episode: 
      <span className="text-primary">{name ==="" ? "unknown": name}</span>
    </h1>
    <h5 className="text-center">
      Air_date: {air_date ==="" ? "unknown": air_date}
    </h5>
  </div>
  <div className="row">
     <div className="col-lg-3 ps-5 col-12">
       <h4 className="text-center mb-4">Pick Episodes</h4>
       <InputGroup setID={setID} name="Episode" total={51}/>
       </div>
     <div className="col-lg-8 col-12">
     <div className="row"> 
     <Cards page="/episodes/" results={results}/>
     
     </div>
  </div>
  </div>
  </div>
)
};

export default Episode