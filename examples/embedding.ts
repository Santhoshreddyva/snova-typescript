#!/usr/bin/env -S npm run tsn -T

import Sambanonva from 'sambanovasdk'; 

// gets API Key from environment variable SNOVA_API_KEY
const sambanova = new Sambanonva();

async function main() {
  // ---------------- Embedding Example ----------------

  const embeddingParams: Sambanonva.Embedding.EmbeddingGenerateParams = {
    model: 'E5-Mistral-7B-Instruct', 
    input: 'This is a test input for generating embeddings.',
  };
  console.log('Embedding Params:', embeddingParams);

  const embeddingResponse = await sambanova.embedding.generate(embeddingParams);
  console.log('Embedding Response:', embeddingResponse);
  if (embeddingResponse.data?.length && embeddingResponse.data[0]?.embedding) {
    console.log('Embedding Output:', embeddingResponse.data[0].embedding);
  } else {
    console.log('No embedding data found in the response.');
  }
}

main();
