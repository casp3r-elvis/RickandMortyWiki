import React, { useEffect, useState } from 'react';

import Cards from '../Cards/cards';
import InputGroup from '/Users/esikeelvis/WebstormProjects/reactwiki/src/components/InputGroup.js'

const Location = () => {

  let [id, setID] = useState(1);
  let [info, setInfo] = useState([])
  let [results, setResult] = useState([])
  let {name, type, dimension} = info
  let api = `https://rickandmortyapi.com/api/location/${id}`

  useEffect (()=>{

   (async function(){
     let data = await fetch(api).then((res) =>res.json());
     setInfo(data);

     let ch = await Promise.all(
       data.residents.map((x)=>{
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
      Location: 
      <span className="text-primary">{name ==="" ? "unknown": name}</span>
    </h1>
    <h5 className="text-center">
     Dimension: {dimension ==="" ? "unknown": dimension}
    </h5>
       <h1 className="text-center mb-4">
      Type: 
      <span className="text-primary">{name ==="" ? "unknown": name}</span>
    </h1>
    <h5 className="text-center">
      Type : {type ==="" ? "unknown": type}
    </h5>
     
  </div>
  <div className="row">
     <div className="col-lg-3 ps-5 col-12">
       <h4 className="text-center mb-4">Pick Location</h4>
       <InputGroup setID={setID} name="Location" total={121}/>
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

export default Location