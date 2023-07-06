import { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';
import {fetchDataFromAPI} from "./utils/api"
import Home from './pages/home/Home';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Details from './pages/details/Details';
import PageNotFound from './pages/404/PageNotFound';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';



function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);
  useEffect(() =>{
    fetchAPI();
    genresCall();
  }, []);

  const fetchAPI = () => {
    fetchDataFromAPI('/configuration')
      .then((res) => {

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
          
        }

        dispatch(getApiConfiguration(url))
      })
  } 

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"]
    let allGenres = {}
    endPoints.forEach((url) => {
      promises.push(fetchDataFromAPI(`/genre/${url}/list`));
    })

    const data = await Promise.all(promises );
    data.map(({genres})=>{
      return genres.map((item) => (allGenres[item.id] = item))
    });
    dispatch(getGenres(allGenres));


  }

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/:mediaType/:id" element={<Details />}/>
      <Route path="/search/:query" element={<SearchResult />}/>
      <Route path="/explore/:mediaType" element={<Explore />}/>
      <Route path="*" element={<PageNotFound />}/>


    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
