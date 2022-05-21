import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/cards";
import Filters from "./components/Filters/filters";
import Pagination from './components/Pagination/pagination';
import Search from './components/Search/search';
import Nvbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Episode from './components/Pages/Episode';
import Location from './components/Pages/Location';
import CardDetails from './components/Cards/CardDetails';

function App(){
  return(
    
    <Router>
      <div className="App">
            <Nvbar/>
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<CardDetails/>}/>

      <Route path="/episodes" element={<Episode/>}/>
       <Route path="/episodes/:id" element={<CardDetails/>}/>

      <Route path="/location" element={<Location/>}/>
       <Route path="/location/:id" element={<CardDetails/>}/>
      </Routes>
    </Router>
  )
}

const Home =()=> {
  
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("")
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
        <h1 className="text-center mb-4">Characters</h1>
    
        <Search updatePageNumber={updatePageNumber} setSearch={setSearch}/>
       <div className="contanier">
         <div className="row">
           
           <Filters  
           pageNumber={pageNumber}
            status={status}
           updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies} 
            updatePageNumber={updatePageNumber} />
         
              <div className="col-lg-8 col-12">
              <div className="row">
               <Cards page="/" results={results}/>
              </div>
              </div>
         </div>
        </div>
       <Pagination info={info} pageNumber={pageNumber} updatePageNumber={updatePageNumber} />
       </div>
    );
}

export default App;