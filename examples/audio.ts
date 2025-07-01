#!/usr/bin/env -S npm run tsn -T

import Sambanonva from 'sambanovasdk'; 
import fs from 'fs';

// gets API Key from environment variable SNOVA_API_KEY
const sambanova = new Sambanonva();
sambanova.apiKey = process.env['SNOVA_API_KEY'] || null;

// Helper function to encode the audio file
function encodeAudio(audioPath: string): string {
  const audioBuffer = fs.readFileSync(audioPath);
  return audioBuffer.toString('base64');
}

async function main() {
  const audioPath = 'examples/testdata/audio/sample_audio.mp3';
  const base64Audio = `data:audio/mp3;base64,${encodeAudio(audioPath)}`;

  // ---------------- Explicit non-streaming params ------------

  const params: Sambanonva.Audio.AudioReasoningParams = {
    model: 'Whisper-Large-v3',
    messages: [
      { role: 'assistant', content: 'you are a helpful assistant' },
      {
        role: 'user',
        content: [
          {
            type: 'audio_content',
            audio_content: {
              content: base64Audio,
            },
          },
        ],
      },
      { role: 'user', content: 'what is the audio about' },
    ],
    max_tokens: 200,
    temperature: 0.01,
    stream: false,
  };
  const completion = await sambanova.audio.reasoning(params);
  console.log(completion.choices);

  // ---------------- Explicit streaming params ----------------

  const streamingParams: Sambanonva.Audio.AudioReasoningParams = {
    model: 'Whisper-Large-v3',
    messages: [
      { role: 'assistant', content: 'you are a helpful assistant' },
      {
        role: 'user',
        content: [
          {
            type: 'audio_content',
            audio_content: {
              content: base64Audio,
            },
          },
        ],
      },
      { role: 'user', content: 'what is the audio about' },
    ],
    max_tokens: 200,
    temperature: 0.01,
    stream: true,
  };

  const stream = await sambanova.audio.reasoning(streamingParams);
  console.log(stream);
//   for await (const chunk of stream) {
//     process.stdout.write(chunk.choices[0]?.delta?.content || '');
//   }
  process.stdout.write('\n');

  // ---------------- Dynamic params type -------------------

  // TS knows this is a `Stream`
  const streamParamsFromFn = await createReasoningParams(true);
  const streamFromFn = await sambanova.audio.reasoning(streamParamsFromFn);
  console.log(streamFromFn);

  // TS knows this is a `ChatCompletion`
  const paramsFromFn = await createReasoningParams(false);
  const completionFromFn = await sambanova.audio.reasoning(paramsFromFn);
  console.log(completionFromFn);
}

// Dynamically construct the params object while retaining whether or
// not the response will be streamed.
export async function createReasoningParams(
  stream: true,
): Promise<Sambanonva.Audio.AudioReasoningParams>;
export async function createReasoningParams(
  stream: false,
): Promise<Sambanonva.Audio.AudioReasoningParams>;
export async function createReasoningParams(
  stream: boolean,
): Promise<Sambanonva.Audio.AudioReasoningParams> {
  const audioPath = 'examples/testdata/audio/sample_audio.mp3';
  const base64Audio = `data:audio/mp3;base64,${encodeAudio(audioPath)}`;

  const params: Sambanonva.Audio.AudioReasoningParams = {
    model: 'Whisper-Large-v3',
    messages: [
      { role: "assistant" as const, content: 'you are a helpful assistant' },
      {
        role: "user" as const,
        content: [
          {
            type: 'audio_content',
            audio_content: {
              content: base64Audio,
            },
          },
        ],
      },
      { role: "user" as const, content: 'what is the audio about' },
    ],
    max_tokens: 200,
    temperature: 0.01,
    stream: stream,
  };

  return params;
}

main();
