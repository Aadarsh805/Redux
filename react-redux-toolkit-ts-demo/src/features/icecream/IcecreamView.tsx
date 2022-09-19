import React, {useState} from "react";
// import { useSelector, useDispatch } from "react-redux";
import {ordered, restocked} from './icecreamSlice'
import {useAppDispatch, useAppSelector} from '../../app/hooks'

const IcecreamView = () => {
  const [value, setValue] = useState(1)
  const numOfIcecreams = useAppSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of icecreams: {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecreams</button>
      <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(value))}>Restock icecreams</button>
    </div> 
  );
};

export default IcecreamView;
