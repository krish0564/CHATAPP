import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const getConversation = () => {
  const [loading, setLoding] = useState(false);
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    const getConversation = async () => {
      setLoding(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.message);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoding(false);
      }
    };
    getConversation();
  }, []);
  return { loading, conversations };
};

export default getConversation;
