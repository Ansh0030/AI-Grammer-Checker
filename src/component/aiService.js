import axios from "axios";

export const submitPrompt = async (text) => {
  const GEMINI_API_KEY = "AIzaSyAvmNl_VNlmqyYzphCFpFsxqB4Vyf51JZU";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

  const data = {
    contents: [
      {
        parts: [{ text: `Correct grammar of this text: ${text}` }],
      },
    ],
  };

  try {
    const response = await axios.post(url, data, {
      headers: { "Content-Type": "application/json" },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.response || error.message || error);
    return null;
  }
};
