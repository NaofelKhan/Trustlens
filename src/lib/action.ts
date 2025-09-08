  import { GoogleGenAI } from "@google/genai";

  export async function analyzeSentiment(product_name: string, review: string): Promise<string | undefined> {

    try {
        const ai = new GoogleGenAI({});
        async function main() {
            const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: product_name,
            config: {
                    systemInstruction: "Search other reviews you can get for the product and then run a sentimental analysis on the given and searched reviews  and only give the sentiment as a response return a JSON object with the following keys:overall_sentiment_label,overall_sentiment_score in percentage, positive, negative, neutral with respective percentages stricly maintain JSON object all the times.",

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


