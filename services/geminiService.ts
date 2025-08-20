
import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });
let chat: Chat | null = null;

function initializeChat(): Chat {
    return ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: `You are a helpful and knowledgeable assistant specializing in Colombian law, specifically the right of Habeas Data. Your role is to answer user questions clearly, accurately, and concisely.
            - Base your answers on the principles of Habeas Data in Colombia: access, rectification, elimination, and opposition.
            - Mention key laws like Law 1266 of 2008 and Law 1581 of 2012 when relevant.
            - Keep your tone professional, educational, and easy to understand for a general audience.
            - Do not provide legal advice, but explain the concepts and rights.
            - Keep answers relatively short.
            - Respond in Spanish.`
        },
    });
}


export const getChatResponse = async (prompt: string, history: ChatMessage[]): Promise<string> => {
    try {
        if (!API_KEY) {
            return "Error: API key is not configured. Please check your environment variables.";
        }

        if (!chat) {
            chat = initializeChat();
            // This is a simplified history hydration. For a real app, you might want more robust logic.
            // Note: Gemini's `create` doesn't take history. We send messages to build it up.
            // For this app, we'll start a fresh chat on first message.
        }

        const response = await chat.sendMessage({ message: prompt });
        return response.text;
    } catch (error) {
        console.error("Error fetching response from Gemini API:", error);
        chat = null; // Reset chat on error
        return "Sorry, I encountered an error. Please try again.";
    }
};
