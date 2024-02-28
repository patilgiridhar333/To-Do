import React, { useContext } from "react";

import { useRef} from "react";
import styles from './Inputt.module.css'

import {ItemsContext} from '../store/ItemsContext'
export default function Inputt() {
  // const[name,setName]=useState('');
  // const[date,setDate]=useState("");
  const name=useRef();
  const date=useRef();
  // const hanndleName2=(event)=>{
  //   console.log(event.target.value)
  //     setName(event.target.value);
  // }
  // const handleDate2=(event)=>{
  //   setDate(event.target.value)
  // }
  const {addItem}=useContext(ItemsContext);
  const handleButton=()=>{
    const name1=name.current.value;
    const date1=date.current.value;
    name.current.value="";
    date.current.value="";
    addItem(name1,date1);
    // setDate("");
    // setName("");
  }
  return (
    <div >
      <div className={`container text-center ${styles.showing}`} style={{backgroundColor:"rgba(211, 211, 211,0.7)"}}>
        <div className="row justify-content-md-center">
          <div className="row ff">
            <div className="col col-lg-6">
              <input type="text" ref={name} className="my-3"  style={{borderRadius:5,backgroundColor:"white",opacity:1}}  placeholder="Enter todo here"></input>
            </div>
            <div className="col col-lg-4">
              <input type="date" ref={date} className="my-3"  style={{borderRadius:5,backgroundColor:"white"}} ></input>
            </div>
            <div className="col col-lg-2">
              <button type="button" onClick={handleButton} className="btn btn-primary my-3">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
