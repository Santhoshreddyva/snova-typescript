#!/usr/bin/env -S npm run tsn -T

import Sambanonva from 'sambanovasdk'; 
import fs from 'fs';

// gets API Key from environment variable SNOVA_API_KEY
const sambanova = new Sambanonva();

// Helper function to encode the image
function encodeImage(imagePath: string): string {
  const imageBuffer = fs.readFileSync(imagePath);
  return imageBuffer.toString('base64');
}

async function main() {
  // ---------------- Vision Example ----------------

  const imagePath = 'examples/testdata/image/sample_image.jpg'; 
  const base64Image = `data:image/jpeg;base64,${encodeImage(imagePath)}`;

  const visionParams: Sambanonva.Chat.ChatGenerateCompletionParams = {
    model: 'Llama-4-Maverick-17B-128E-Instruct',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'What is happening in this image?',
          },
          {
            type: 'image_url',
            image_url: {
              url: base64Image,
            },
          },
        ],
      },
    ],
    max_tokens: 300,
    temperature: 0.7,
    top_p: 0.9,
    top_k: 50,
  };
  console.log('Vision Params:', visionParams);

  const visionResponse = await sambanova.chat.generateCompletion(visionParams);
  console.log('Vision Response:', visionResponse);

  if (visionResponse.choices?.length && visionResponse.choices[0]?.message?.content) {
    console.log('Vision Output:', visionResponse.choices[0].message.content);
  } else {
    console.log('No vision data found in the response.');
  }
}

main();