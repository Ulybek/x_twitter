import logo from './logo.svg';
import './App.css';
import './Header.css';
import './Posts.css';
import './Profile.css';
import './Lists.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Profile from './Profile';
import MainLists from './MainLists';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './data';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='Main--page'>
          <Header></Header>
          <div className='stick-1'></div>
          <Routes>
            <Route path='/' element={<Main data={data.PostPage}></Main>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path='/lists' element={<MainLists data={data.ListPage}></MainLists>}></Route>
          </Routes>
          <div className='stick-2'></div>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
