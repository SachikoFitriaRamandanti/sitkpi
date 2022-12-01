import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import { TbMilk, TbFish } from 'react-icons/tb'
import { BiFoodMenu } from 'react-icons/bi'
import { BsEggFried } from 'react-icons/bs'
import { CiCoffeeBean } from 'react-icons/ci'
import { GiFruitBowl, GiWheat, GiTreeRoots,   GiCoolSpices, GiWrappedSweet,  GiMeatCleaver, GiThreeLeaves, GiFat } from 'react-icons/gi'
import './App.css'
import Movie from './Pages/Movie'
import Profile from './Pages/Profile'
import Serealia from './Pages/Serealia'
import Detail from './Pages/Detail'
import Information from './Pages/Information'
import Umbi from './Pages/Umbi'
import Sayuran from './Pages/Sayuran'
import Buah from './Pages/Buah'
import Ikan from './Pages/Ikan'
import About from './Pages/About'
function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">SISTEM INFORMASI TABEL KOMPOSISI PANGAN INDONESIA</p>
      </header>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/serealia" element={<Serealia />} />
        <Route path="/umbi" element={<Umbi />} />
        <Route path="/sayuran" element={<Sayuran />} />
        <Route path="/buah" element={<Buah />} />
        <Route path="/information" element={<Information />} />
        <Route path="/ikan" element={<Ikan />} />
        <Route path="/about" element={<About />} />
        <Route path="/pangan/:id" element={<Detail />} />
      </Routes>
      <footer>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </NavLink>
        <NavLink to="/serealia" className="iconWrapper">
          <GiWheat className="icon" />
          Serealia
        </NavLink>
        <NavLink to="/Umbi" className="iconWrapper">
          <GiTreeRoots className="icon" />
          Umbi
        </NavLink>
        <NavLink to="/Sayuran" className="iconWrapper">
          <GiThreeLeaves className="icon" />
          Sayuran
        </NavLink>
        <NavLink to="/Buah" className="iconWrapper">
          <GiFruitBowl className="icon" />
          Buah
        </NavLink>
        <NavLink to="/Ikan" className="iconWrapper">
          <TbFish className="icon" />
          Ikan
        </NavLink>
        <NavLink to="/about" className="iconWrapper">
          <HiHome className="icon" />
          About
        </NavLink>

      </footer>
    </BrowserRouter>
  )
}

export default App

