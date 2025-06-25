// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sambanova, { toFile } from 'sambanovasdk';

const client = new Sambanova({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audio', () => {
  // skipped: tests are disabled for the time being
  test.skip('reasoning: only required params', async () => {
    const responsePromise = client.audio.reasoning({
      messages: [{ content: 'string', role: 'user' }],
      model: 'model',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('reasoning: required and optional params', async () => {
    const response = await client.audio.reasoning({
      messages: [{ content: 'string', role: 'user' }],
      model: 'model',
      max_tokens: 0,
      response_format: 'json',
      stream: true,
      stream_options: { include_usage: true },
      temperature: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('transcribe: only required params', async () => {
    const responsePromise = client.audio.transcribe({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      model: 'model',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('transcribe: required and optional params', async () => {
    const response = await client.audio.transcribe({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      model: 'model',
      language: 'language',
      max_tokens: 0,
      prompt: 'prompt',
      response_format: 'json',
      stream: true,
      stream_options: { include_usage: true },
      temperature: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('translate: only required params', async () => {
    const responsePromise = client.audio.translate({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      model: 'model',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('translate: required and optional params', async () => {
    const response = await client.audio.translate({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      model: 'model',
      language: 'language',
      prompt: 'prompt',
      response_format: 'json',
      stream: true,
      stream_options: { include_usage: true },
    });
  });
});
