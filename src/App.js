import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/cards";
import Filters from "./components/Filters/filters";
import Pagination from './components/Pagination/pagination';
import Search from './components/Search/search';


function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedDate] = useState([]);
  let {info, results} = fetchedData;
  

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=>{

    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedDate(data);
    })();

  },[api])

    return ( 
        <div className = "App" >
       <h1 className="text-center ubuntu my-4">Rick & Morty <span className="text-primary">Wiki</span> </h1>
        <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
       <div className="contanier">
         <div className="row">
           
           <Filters />
         
              <div className="col-8">
              <div className="row">
               <Cards results={results}/>
              </div>
              </div>
         </div>
        </div>
       <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
       </div>
    );
}

export default App;