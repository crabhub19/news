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
        <Route path='' element={<NewsContainer key="general" catagory="general"/>}></Route>
        <Route exact path='general' element={<NewsContainer key="general" catagory="general"/>}></Route>
        <Route exact path='sports' element={<NewsContainer key="sports" catagory="sports"/>}></Route>
        <Route exact path='technology' element={<NewsContainer key="technology" catagory="technology"/>}></Route>
        <Route exact path='business' element={<NewsContainer key="business" catagory="business"/>}></Route>
        <Route exact path='science' element={<NewsContainer key="science" catagory="science"/>}></Route>
        <Route exact path='health' element={<NewsContainer key="health" catagory="health"/>}></Route>
        <Route exact path='entertainment' element={<NewsContainer key="entertainment" catagory="entertainment"/>}></Route>
      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
