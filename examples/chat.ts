#!/usr/bin/env -S npm run tsn -T

import Sambanonva from 'sambanovasdk'; 

// gets API Key from environment variable SNOVA_API_KEY
const sambanova = new Sambanonva();

async function main() {
  // ---------------- Explicit non-streaming params ------------

  const params: Sambanonva.Chat.ChatGenerateCompletionParams = {
    model: 'Meta-Llama-3.1-8B-Instruct',
    messages: [{ role: 'user', content: 'Say this is a test!' }],
  };
  const completion = await sambanova.chat.generateCompletion(params);
  console.log(completion.choices![0]?.message?.content);

  // ---------------- Explicit streaming params ----------------

  const streamingParams: Sambanonva.Chat.ChatGenerateCompletionParams = {
    model: 'Meta-Llama-3.1-8B-Instruct',
    messages: [{ role: 'user', content: 'Say this is a test!' }],
    stream: true,
  };

  const stream = await sambanova.chat.generateCompletion(streamingParams);
  console.log(stream);
//   for await (const chunk of stream) {
//     process.stdout.write(chunk.choices[0]?.delta?.content || '');
//   }
  process.stdout.write('\n');

  // ---------------- Explicit (non)streaming types ----------------

  const params1: Sambanonva.Chat.ChatGenerateCompletionParams = {
    model: 'Meta-Llama-3.1-8B-Instruct',
    messages: [{ role: 'user', content: 'Say this is a test!' }],
  };

  const params2: Sambanonva.Chat.ChatGenerateCompletionParams = {
    model: 'Meta-Llama-3.1-8B-Instruct',
    messages: [{ role: 'user', content: 'Say this is a test!' }],
    stream: true,
  };

  // ---------------- Implicit params type -------------------

  // Note: the `as const` is required here so that TS can properly infer
  // the right params type.
  //
  // If you didn't include it then you'd also get an error saying that
  // `role: string` is not assignable.
  const streamingParams2 = {
    model: 'Meta-Llama-3.1-8B-Instruct',
    messages: [{ role: 'user' as const, content: 'Say this is a test!' }],
    stream: true as const,
  };

  // TS knows this is a Stream instance.
  const stream2 = await sambanova.chat.generateCompletion(streamingParams2);
    console.log(stream2);
//   for await (const chunk of stream2) {
//     process.stdout.write(chunk.choices[0]?.delta?.content || '');
//   }
  process.stdout.write('\n');

  // Without the `as const` for `stream`.
  const streamingParams3 = {
    model: 'Meta-Llama-3.1-8B-Instruct',
    messages: [{ role: 'user' as const, content: 'Say this is a test!' }],
    stream: true,
  };

  // TS doesn't know if this is a `Stream` or a direct response
  const response = await sambanova.chat.generateCompletion(streamingParams3);
  console.log(response);
//   if (response instanceof Stream) {
//     // here TS knows the response type is a `Stream`
//   } else {
//     // here TS knows the response type is a `ChatCompletion`
//   }

  // ---------------- Dynamic params type -------------------

  // TS knows this is a `Stream`
  const streamParamsFromFn = await createCompletionParams(true);
  const streamFromFn = await sambanova.chat.generateCompletion(streamParamsFromFn);
  console.log(streamFromFn);

  // TS knows this is a `ChatCompletion`
  const paramsFromFn = await createCompletionParams(false);
  const completionFromFn = await sambanova.chat.generateCompletion(paramsFromFn);
  console.log(completionFromFn);
}

// Dynamically construct the params object while retaining whether or
// not the response will be streamed.
export async function createCompletionParams(
  stream: true,
): Promise<Sambanonva.Chat.ChatGenerateCompletionParams>;
export async function createCompletionParams(
  stream: false,
): Promise<Sambanonva.Chat.ChatGenerateCompletionParams>;
export async function createCompletionParams(
  stream: boolean,
): Promise<Sambanonva.Chat.ChatGenerateCompletionParams> {
  const params = {
    model: 'Meta-Llama-3.1-8B-Instruct',
    messages: [{ role: 'user' as const, content: 'Hello!' }],
    stream: stream,
  };
 

  return params;
}

main();