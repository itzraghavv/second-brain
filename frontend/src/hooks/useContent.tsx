import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export const useContent = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/content`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setContent(response.data.content);
      } catch (err) {
        console.log("Error getting contents", err);
      }
    };
    fetchData();
  }, []);
  return content;
};
