import axios from "axios";

export const submitPrompt = async (text) => {
  const url = "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer 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",
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
