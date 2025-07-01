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
  const audioPath = 'examples/testdata/transcription/sample_audio2.mp3';
  const base64Audio = `data:audio/mp3;base64,${encodeAudio(audioPath)}`;

  // Update parameters and response handling for transcription
  const params: Sambanonva.Audio.AudioTranscribeParams = {
    file: fs.createReadStream(audioPath),
    model: 'Whisper-Large-v3',
  };

  const transcription = await sambanova.audio.transcribe(params);
  console.log('Transcription Output:', transcription.text);
}

main();
