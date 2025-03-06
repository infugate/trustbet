import React from 'react'
import Baccrat from './Baccrat'

import Pokker from './Pokker';
import { Routes ,Route} from 'react-router-dom';

const BelowNab = () => {
  return (
    <div>
        <div>
          <Baccrat/>
        </div>
        <div>
        <Routes>
          <Route path="/Poker" element={<Pokker/>} />
        </Routes>
        </div>
    </div>
  )
}

export default BelowNab