import React, { useRef } from 'react';
import { firestore } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";

export default function Home() {
  const messageRef = useRef();
  const ref = collection(firestore, "messages");

  const handeleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
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