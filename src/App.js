import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import ItemListPage from './pages/ItemListPage';
import Navbar from './components/Navbar';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import AddItem from './pages/AddItem';
import SingleItemPage from './pages/SingleItemPage';
import PokemonCard from './components/PokemonCard';
import PokemonCardId from './components/PokemonCardId';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div className='Home'>
        <h1 style={{
          fontSize: '72px'
        }}>Pokemon Card Finder</h1>
        <div>
          <p style={{
            fontSize: '36px'
          }}>Get all the prices for pokemon cards.</p>
        </div>
        </div>} />
        <Route path="/signup" element={
          <IsAnon>
            <SignupPage />
          </IsAnon>
        } />
        <Route path="/login" element={
          <IsAnon>
            <LoginPage />
          </IsAnon>
        } />
        <Route path="/info-list" element={
        <div className='Info'>
          <IsPrivate>
            <ItemListPage />
          </IsPrivate>
        </div>
        } />
        <Route path="/info/create" element={
          <div className='Add'>
          <IsPrivate>
            <AddItem />
          </IsPrivate>
          </div>
        } />
        <Route path="/info/:infoId" element={
          <div className='Data'>
          <IsPrivate>
            <SingleItemPage />
          </IsPrivate>
          </div>
        } />
        <Route path="/add/card" element={
          <div className='Card'>
          <IsPrivate>
            <PokemonCard />
          </IsPrivate>
          </div>
        } />
        <Route path="/add/card-id" element={
          <div className='Card'>
          <IsPrivate>
            <PokemonCardId />
          </IsPrivate>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
