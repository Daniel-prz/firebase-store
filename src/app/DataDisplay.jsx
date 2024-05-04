"use client";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";

export default function DataDisplay() {
  const [messages, setmessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const messageArray = [];
        querySnapshot.forEach((doc) => {
          messageArray.push({ id: doc.id, ...doc.data() });
        });
        setmessages(messageArray);
      } catch (error) {}
    };

    fetchMessages();
  }, []);
  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <h3>{message.username}:</h3> <p>{message.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
