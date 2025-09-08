
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!, // keep secret on server
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    config: {
        systemInstruction: "Get the postive concerns and negative concerns about the product and return a response as a JSON object with the following keys:positive_concerns,negative_concerns only.",
    }
  });
    return response.text;
}
