import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const CreatePost = async (title: string, type: string, link: string) => {
  try {
    await axios.post(
      `${API_URL}/content`,
      {
        title,
        type,
        link,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  } catch (err) {
    console.error("Error Creating Content", err);
  }
};
