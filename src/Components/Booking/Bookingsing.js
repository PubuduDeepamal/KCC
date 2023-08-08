import React from 'react';
import { useRef } from 'react';
// import { firbase} from "../firebase";
// import {addDoc,collection} from "@firebase/firestore";

  const Bookingsing = () => {

  const messageRef = useRef();

  const handeleSave = async (e) =>{
    e.preventDefault();
    console.log(messageRef.current.value);

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
