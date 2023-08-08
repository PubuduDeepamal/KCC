import React from 'react';
import { useRef } from 'react';
import { firestore} from "../../firebase";
import {addDoc,collection} from "@firebase/firestore";

const Bookingsing = () => {

  const messageRef = useRef();
  const ref = collection(firestore,"messages")

  const handeleSave = async (e) =>{
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    };

    try{
      addDoc(ref,)
    } catch(e){
      console.log(e);
    }

  };

  return (
    <div>
      <form onSubmit={handeleSave}>
        <label>Enter Message</label>
        <input type="text" ref={messageRef} />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
}

export default Bookingsing;
