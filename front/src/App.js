// import './App.css';

// import { BrowserRouter, Routes,Route} from "react-router-dom";
// // import SignUp from './Pages/SignUp';
// // import Login1 from './Pages/Login1';
// import Navbar1 from './componets/Navbar1';

// import {ProfileProvider} from './MainSection/context/ProfileContext';


// function App() {
//   return (
//     <ProfileProvider>
//     <BrowserRouter>
//     <Navbar1/>
//     <Routes>
//       {/* <Route path="/login" element={<Login1 />}></Route>
//       <Route path="/signup" element={<SignUp />}></Route>  */}
//      {/* <Route path="/abc" element={<AndarBaharGame />}></Route> */}
    
//     </Routes>
//   </BrowserRouter>
//   </ProfileProvider>
//   );
// }

// export default App;





import './App.css';

import { BrowserRouter, Routes,Route} from "react-router-dom";
import SignUp from './Pages/SignUp';
import Login1 from './Pages/Login1';
import Navbar1 from './componets/Navbar1';

import {ProfileProvider} from './MainSection/context/ProfileContext';
import { useState,useEffect } from 'react';


function App() {
  const [isLogin, setLogin] = useState(() => {
    return localStorage.getItem("isLogin") === "true";
  });

  const [isVisible, setIsVisible] = useState(() => {
    return localStorage.getItem("isVisible") !== "false";
  });

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
    localStorage.setItem("isVisible", isVisible);
  }, [isLogin, isVisible]);
  return (
    <ProfileProvider>
       <BrowserRouter>
       {isLogin && <Navbar1 setLogin={setLogin} setIsVisible={setIsVisible} />}

       {isVisible&&(
    <Routes> 
      <Route path="/login" element={<Login1 setLogin={setLogin}  setIsVisible={setIsVisible}/>}></Route>
      <Route path="/" element={<SignUp  setLogin={setLogin} setIsVisible={setIsVisible} />} ></Route> 
    </Routes>
      )}
  </BrowserRouter>
  </ProfileProvider>
  );
}

export default App;



