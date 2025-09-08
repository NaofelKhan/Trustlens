  import { GoogleGenAI } from "@google/genai";

  export async function analyzeSentiment(review: string): Promise<string | undefined> {

    try {
        const ai = new GoogleGenAI({});
        async function main() {
            const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: review,
            config: {
                    systemInstruction: "Run sentiment analysis on the given review and return a JSON object with the following keys: overall_sentiment_label,overall_sentiment_score in percentage, positive, negative, neutral with respective percentages and do not add anything extra and always respond in JSON format must give response in the fixed format",

            },
        });
            return response.text;
        }


        // Call Google AI Studio / Vertex AI for sentiment analysis
         const response = await main();

        // Adjust this based on the model response format
        return response;
    } catch (err: any) {
        console.error(err);
    }
}