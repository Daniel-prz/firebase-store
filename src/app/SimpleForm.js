import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default function SimpleForm() {
  const [username, setusername] = useState("");

  const [message, setmessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(username, message);
      await addMessage({ username, message });
      setusername("");
      setmessage("");
    } catch (error) {
      console.log("Error sending message", error);
    }
  }
  const addMessage = async (message) => {
    const docRef = await addDoc(collection(db, "messages"), message);
    console.log("Document written with ID", docRef.id);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          onChange={(e) => {
            setusername(e.target.value);
          }}
          type="text"
          value={username}
        ></input>
      </label>
      <label>
        Message:
        <input
          onChange={(e) => {
            setmessage(e.target.value);
          }}
          type="text"
          value={message}
        ></input>
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
