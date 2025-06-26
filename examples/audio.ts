#!/usr/bin/env -S npm run tsn -T

import Sambanonva from 'sambanovasdk'; 

// gets API Key from environment variable SNOVA_API_KEY
const sambanova = new Sambanonva();

async function main() {
  // ---------------- Reasoning Example ----------------

  const reasoningParams: Sambanonva.Audio.AudioReasoningParams = {
    model: 'Whisper-Large-v3',
    messages: [{ role: 'user', content: 'Analyze this audio content!' }],
  };
  const reasoningResponse = await sambanova.audio.reasoning(reasoningParams);
  console.log(reasoningResponse);

  // ---------------- Transcription Example ----------------

  const transcribeParams: Sambanonva.Audio.AudioTranscribeParams = {
    model: 'Whisper-Large-v3',
    file: require('fs').createReadStream('examples/testdata/audio/sample_audio.mp3'),
    response_format: 'text',
  };
  const transcriptionResponse = await sambanova.audio.transcribe(transcribeParams);
  console.log(transcriptionResponse.text);

  // ---------------- Translation Example ----------------

  const translateParams: Sambanonva.Audio.AudioTranslateParams = {
    model: 'Whisper-Large-v3',
    file: require('fs').createReadStream('examples/testdata/audio/sample_audio.mp3'),
    response_format: 'text',
  };
  const translationResponse = await sambanova.audio.translate(translateParams);
  console.log(translationResponse.text);
}

main();
