import axios from "axios";

interface SendBotProps {
  name: string;
  email: string;
  message: string;
}

const sendbot = async (data: SendBotProps): Promise<any> => {
  try {
    const response = await axios.post("/api/bot-telegram", data);
    return response.data;
  } catch (error) {
    console.error("Error sending bot message:", error);
    throw error;
  }
};

export default sendbot;
