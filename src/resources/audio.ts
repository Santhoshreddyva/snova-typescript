// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class Audio extends APIResource {
  /**
   * Advanced audio analysis with optional text instructions
   */
  reasoning(body: AudioReasoningParams, options?: RequestOptions): APIPromise<AudioReasoningResponse> {
    return this._client.post('/audio/reasoning', { body, ...options });
  }

  /**
   * Convert audio to text
   */
  transcribe(body: AudioTranscribeParams, options?: RequestOptions): APIPromise<AudioTranscribeResponse> {
    return this._client.post(
      '/audio/transcriptions',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Translate audio content
   */
  translate(body: AudioTranslateParams, options?: RequestOptions): APIPromise<AudioTranslateResponse> {
    return this._client.post(
      '/audio/translations',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface AudioReasoningResponse {
  id?: string;

  choices?: Array<AudioReasoningResponse.Choice>;

  created?: number;

  model?: string;
}

export namespace AudioReasoningResponse {
  export interface Choice {
    delta?: Choice.Delta;

    finish_reason?: string | null;

    index?: number;

    logprobs?: unknown;
  }

  export namespace Choice {
    export interface Delta {
      content?: string;

      role?: string;
    }
  }
}

export interface AudioTranscribeResponse {
  text?: string;
}

export interface AudioTranslateResponse {
  text?: string;
}

export interface AudioReasoningParams {
  /**
   * A list of messages with role (user/system/assistant), and content (text or
   * audio).
   */
  messages: Array<AudioReasoningParams.Message>;

  /**
   * Only Qwen2-Audio-7B-Instruct is currently supported.
   */
  model: string;

  max_tokens?: number;

  response_format?: 'json' | 'text';

  stream?: boolean;

  stream_options?: AudioReasoningParams.StreamOptions;

  temperature?: number;
}

export namespace AudioReasoningParams {
  export interface Message {
    content: string | Array<Message.UnionMember1>;

    role: 'user' | 'system' | 'assistant';
  }

  export namespace Message {
    export interface UnionMember1 {
      audio_content: UnionMember1.AudioContent;

      type: 'audio_content';
    }

    export namespace UnionMember1 {
      export interface AudioContent {
        /**
         * Base64-encoded audio in data URI format.
         */
        content: string;
      }
    }
  }

  export interface StreamOptions {
    include_usage?: boolean;
  }
}

export interface AudioTranscribeParams {
  /**
   * Audio file in FLAC, MP3, MP4, MPEG, MPGA, M4A, Ogg, WAV, or WebM format. Max
   * file size: 25MB for Whisper, 30s duration for Qwen2.
   */
  file: Uploadable;

  /**
   * The ID of the model to use.
   */
  model: string;

  /**
   * ISO-639-1 code of the input language.
   */
  language?: string;

  /**
   * Maximum number of tokens to generate. For Qwen2-Audio-7B-Instruct.
   */
  max_tokens?: number;

  /**
   * Prompt to influence transcription style or vocabulary.
   */
  prompt?: string;

  /**
   * Desired format of the transcription result.
   */
  response_format?: 'json' | 'text';

  stream?: boolean;

  /**
   * Additional options for streaming response.
   */
  stream_options?: AudioTranscribeParams.StreamOptions;

  /**
   * Sampling temperature between 0 and 1. For Qwen2-Audio-7B-Instruct.
   */
  temperature?: number;
}

export namespace AudioTranscribeParams {
  /**
   * Additional options for streaming response.
   */
  export interface StreamOptions {
    include_usage?: boolean;
  }
}

export interface AudioTranslateParams {
  file: Uploadable;

  model: string;

  language?: string;

  prompt?: string;

  response_format?: 'json' | 'text';

  stream?: boolean;

  stream_options?: AudioTranslateParams.StreamOptions;
}

export namespace AudioTranslateParams {
  export interface StreamOptions {
    include_usage?: boolean;
  }
}

export declare namespace Audio {
  export {
    type AudioReasoningResponse as AudioReasoningResponse,
    type AudioTranscribeResponse as AudioTranscribeResponse,
    type AudioTranslateResponse as AudioTranslateResponse,
    type AudioReasoningParams as AudioReasoningParams,
    type AudioTranscribeParams as AudioTranscribeParams,
    type AudioTranslateParams as AudioTranslateParams,
  };
}
