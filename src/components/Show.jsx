import React from "react";
import styles from './Show.module.css'
import { useContext } from "react";
import { ItemsContext } from "../store/ItemsContext";

export default function Show() {
  const {deleteItem}=useContext(ItemsContext);
  const {todoItems}=useContext(ItemsContext);
  return (
    <div>
      {todoItems.map(item=>(<div>
        <div key={item} className={`container text-center `}>
          <div key={item} className="row justify-content-md-center">
            <div key={item} className={`row ff `}>
              <div key={item+"1"}className={`col col-lg-6 ${styles.showing}`}>{item.name}</div>
              <div key={item+"3"} className={`col col-lg-4 ${styles.showing}`}>{item.date}</div>
              <div key={item+"2"} className={`col col-lg-2 ${styles.showingg}`}>
                <button type="button" key={item} className="btn btn-danger mx-5" onClick={()=>{deleteItem(item.name)}}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>))}
      
    </div>
  );
}
