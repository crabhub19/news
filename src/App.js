import {useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import NewsContainer from './components/NewsContainer';




function App() {
  console.log(window.location.pathname);
                        // darkMod
  useEffect(() => {
  // icon
  const sunIcon   =  document.querySelector(".sun-icon");
  const moonIcon  =  document.querySelector(".moon-icon");

  //  cheak theme
  const cheakTheme  = ()  =>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      moonIcon.classList.add("display-none");
      
    } else {
      document.documentElement.classList.remove('dark');
      sunIcon.classList.add('display-none');
    }
  }
  cheakTheme();


}, []);
  // iconToggle
  const iconToggle  = ()  =>{
    document.querySelector(".sun-icon").classList.toggle("display-none");
    document.querySelector(".moon-icon").classList.toggle('display-none');
  }
  // toggleTheme
  const toggleTheme = ()  =>{
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      iconToggle();
    }else{
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      iconToggle();
    }
  }
  return (
    <>
    <BrowserRouter>
      <NavBar toggleTheme={toggleTheme}/>
      <Routes>
        <Route path='/news' element={<NewsContainer key="general" catagory="general"/>}></Route>
        <Route path='/news/general' element={<NewsContainer key="general" catagory="general"/>}></Route>
        <Route path='/news/sports' element={<NewsContainer key="sports" catagory="sports"/>}></Route>
        <Route path='/news/technology' element={<NewsContainer key="technology" catagory="technology"/>}></Route>
        <Route path='/news/business' element={<NewsContainer key="business" catagory="business"/>}></Route>
        <Route path='/news/science' element={<NewsContainer key="science" catagory="science"/>}></Route>
        <Route path='/news/health' element={<NewsContainer key="health" catagory="health"/>}></Route>
        <Route path='/news/entertainment' element={<NewsContainer key="entertainment" catagory="entertainment"/>}></Route>
      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
