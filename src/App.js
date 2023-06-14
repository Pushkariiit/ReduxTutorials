import React from 'react'
import './App.css';
import { incNum,decNum } from './actions/index';

import { useSelector,useDispatch } from 'react-redux';
const App = () => {

  const myState = useSelector((state)=>state.UpdateValue);
  const dispatch = useDispatch();
  return (
    <div className='main_div'>
      <div className='container'>
        <h1>Increment/Decrement Counter</h1>
        <h4>Using Redux </h4>

        <div className='quantity'>
          <a className='quantity_minus' title="Decrement"onClick={()=>dispatch(decNum(3))}><span>-</span></a>
          <input name='quantity' type='text' className='quantity_input' value={myState}></input>
          <a className='quantity_plus' title="Increment" onClick={()=>dispatch(incNum(5))}><span>+</span></a>
        </div>
      </div>
    </div>
  )
}

export default App
