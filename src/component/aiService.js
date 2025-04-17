import axios from "axios";

export const submitPrompt = async (text) => {
  const url = "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    // Add Autorization Key into this to call API
  };

  const data = {
    model: "gpt-4.1-nano",
    messages: [
      { role: "user", content: `Improve grammer of this text ${text}` },
    ],
    stream: false,
  };

  try {
    const response = await axios.post(url, data, { headers });
  } catch (error) {
    console.error("Axios Error:", error);
    alert("Something went wrong!");
  }
};
