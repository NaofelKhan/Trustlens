// pages/api/analyzeSentiment.ts
import { GoogleGenAI } from "@google/genai";


export default async function POST(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  try {
    const  review = req.body;

    if (!review) {
      return new Response(JSON.stringify({ error: "Review text is required" }), { status: 400 });
    }
    const ai = new GoogleGenAI({});
    async function main() {
        const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Explain how AI works in a few words",
    });
        return response.text;
    }


    // Call Google AI Studio / Vertex AI for sentiment analysis
    const response = await main();

    // Adjust this based on the model response format
    const sentiment = response; // Placeholder, replace with actual sentiment extraction logic

    return new Response(JSON.stringify({ sentiment }), { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to analyze sentiment" }), { status: 500 });
  }
}
