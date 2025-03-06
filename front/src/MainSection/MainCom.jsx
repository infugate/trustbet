import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './MainCom.css';
// import Home from '../componets/Home';
import Sidebar from './sideBar/SideBar';
import AccountStat from '../Pages/AccountStat';
import CurrentBet from '../Pages/CurrentBet';
import CasinoSet from '../Pages/CasinoSet';
import TenisApi from './ApiComponete/TenisApi';
import FootBalApi from './ApiComponete/FootBalApi';
import TableTenis from './ApiComponete/TableTenis';
import CricketApi from './ApiComponete/CricketApi';
import CricketApi2 from './ApiComponete/CricketApi2';
import BelowNab from './SecondApi/BelowNab'
import CrickBet from './PlayBet/CrickBet'
import Pokker from './SecondApi/Pokker';
import TeenPatti from './SecondApi/TeenPatti';
import Card52 from './SecondApi/Card52';
import AllCasino from './SecondApi/AllCasino';
import Roulette from './SecondApi/Roulette';
import DragonTiger from './SecondApi/Dragon-Tiger';
import Lucky7 from './SecondApi/Lucky7';
import AndarBahar from './SecondApi/AndarBahar';
import CardJudgement from './SecondApi/CardJudgement';
import CasinoWar from './SecondApi/Casino-War';
import OurCasino from './SecondApi/OurCasino';
import LiveVirtual from './SecondApi/SideBarApi.jsx/LiveVirtual';
import AllCasino2 from './SecondApi/SideBarApi.jsx/AllCasino2';
import TeenPatti2 from './SecondApi/SideBarApi.jsx/TeenPatti2';
import DragonTiger2 from './SecondApi/SideBarApi.jsx/DragonTiger2';
import Lucky72 from './SecondApi/SideBarApi.jsx/Lucky72';
import BoolyBood from './SecondApi/SideBarApi.jsx/BoolyBood';
import Other from './SecondApi/SideBarApi.jsx/Other';
import Home from '../componets/Home';
import PlayCasino from './PlayBet/PlayCasino';
import PlayCard from './PlayBet/PlayCard';
import CrickScore from './PlayBet/CrickScore'
import ColorPridiction from './ApiComponete/ColorPridiction'
import Avaitor from './ApiComponete/Avaitor'
import Login1 from '../Pages/Login1';
import SignUp  from '../Pages/SignUp';
import AndharBhar from './PlayBet/AndharBhar';
import T20 from './PlayBet/T20'
const FootBalAPI = () => {
  return (
    <div className="maincontainor">
      <div className="leftSide">
        <Sidebar/>
      </div>
      <div className="rightSide">
        <Routes>
         {/* <Route path="/HOME" element={<Home />} /> */}
         <Route path="/account" element={<AccountStat />} />
         <Route path="/currbet" element={<CurrentBet />}></Route>
         <Route path="/cas" element={<CasinoSet />}></Route>
         <Route path="/TENNIS" element={<TenisApi/>}></Route>
         <Route path="/FOOTBALL" element={<FootBalApi/>}></Route>
         <Route path="/TABLE TENNIS" element={<TableTenis/>}></Route>
         <Route path="/CRICKET" element={<CricketApi/>}></Route>
         <Route path="/All Match" element={<CricketApi2/>}></Route>
         <Route path="/BACCARAT" element={<BelowNab/>}></Route>
         <Route path="/32-CARDS" element={<BelowNab/>}></Route>
         <Route path="/TEENPATTI" element={<BelowNab/>}></Route>
         <Route path="/Our Casino" element={<OurCasino/>}></Route>
         <Route path="/POKKER" element={<BelowNab/>}></Route>
         <Route path="/LUCKY 7" element={<BelowNab/>}></Route>
         <Route path="/Poker" element={<Pokker/>}></Route>
         <Route path="/Teenpati" element={<TeenPatti/>}></Route>
         <Route path="/32 Card" element={<Card52/>}></Route>
         <Route path="/All Casino" element={<AllCasino/>}></Route>
         <Route path="/Roulette" element={<Roulette/>}></Route>
         <Route path="/Dragon Tiger" element={<DragonTiger/>}></Route>
         <Route path="/Andar Bahar" element={<AndarBahar/>}></Route>
         <Route path="/Lucky-7" element={<Lucky7/>}></Route>
         <Route path="/3 Card Judgement" element={<CardJudgement/>}></Route>
         <Route path="/Casino War" element={<CasinoWar/>}></Route>
         <Route path="/play0" element={<CrickBet/>}></Route>
         <Route path="/Our Virtual" element={<LiveVirtual/>}></Route>
         <Route path="/AllCasino" element={<AllCasino2/>}></Route>
         <Route path="/TeenPatti2" element={<TeenPatti2/>}></Route>
         <Route path="/DragonTiger2" element={<DragonTiger2/>}></Route>
         <Route path="/Luck72" element={<Lucky72/>}></Route>
         <Route path="/BoolyBood" element={<BoolyBood/>}></Route>
         <Route path="/Others" element={<Other/>}></Route>
         <Route path="/Home" element={<Home/>}></Route>
         <Route path="/ac1" element={<PlayCasino/>}></Route>
         <Route path="/rol1" element={<PlayCasino/>}></Route>
         <Route path="/tnp1" element={<PlayCasino/>}></Route>
         <Route path="/crd1" element={<PlayCard/>}></Route>
         <Route path="/crd2" element={<PlayCard/>}></Route>
         <Route path="/play1" element={<CrickScore/>}></Route>
         <Route path="/Color Pridiction" element={<ColorPridiction/>}></Route>
         <Route path="/Avaitor" element={<Avaitor/>}></Route>
         <Route path="/login" element={<Login1/>}></Route>
         <Route path="/signup" element={<SignUp/>}></Route>
         <Route path="/play2" element={<CrickScore/>}></Route>
         <Route path="/andr" element={<AndharBhar/>}></Route>
         <Route path='/t20' element={<T20/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default FootBalAPI;
