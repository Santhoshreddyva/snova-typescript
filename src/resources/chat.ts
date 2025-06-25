// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Chat extends APIResource {
  /**
   * Generate a chat completion
   */
  generateCompletion(
    body: ChatGenerateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<ChatGenerateCompletionResponse> {
    return this._client.post('/chat/completions', { body, ...options });
  }
}

export interface ChatGenerateCompletionResponse {
  id?: string;

  choices?: Array<ChatGenerateCompletionResponse.Choice>;

  created?: number;

  model?: string;

  object?: string;
}

export namespace ChatGenerateCompletionResponse {
  export interface Choice {
    finish_reason?: string;

    index?: number;

    logprobs?: string | null;

    message?: Choice.Message;
  }

  export namespace Choice {
    export interface Message {
      content?: string;

      role?: string;
    }
  }
}

export interface ChatGenerateCompletionParams {
  messages: Array<ChatGenerateCompletionParams.Message>;

  model: string;

  max_tokens?: number;

  response_format?: ChatGenerateCompletionParams.ResponseFormat;

  stop?: string | Array<string> | null;

  stream?: boolean;

  stream_options?: ChatGenerateCompletionParams.StreamOptions;

  temperature?: number;

  tool_choice?: 'auto' | 'required' | unknown;

  tools?: Array<ChatGenerateCompletionParams.Tool>;

  top_k?: number;

  top_p?: number;
}

export namespace ChatGenerateCompletionParams {
  export interface Message {
    content: string | Array<Message.UnionMember0 | Message.UnionMember1>;

    role: 'system' | 'user' | 'assistant';
  }

  export namespace Message {
    export interface UnionMember0 {
      text: string;

      type: 'text';
    }

    export interface UnionMember1 {
      image_url: UnionMember1.ImageURL;

      type: 'image_url';
    }

    export namespace UnionMember1 {
      export interface ImageURL {
        url: string;
      }
    }
  }

  export interface ResponseFormat {
    json_schema?: unknown;

    type?: string;
  }

  export interface StreamOptions {
    include_usage?: boolean;
  }

  export interface Tool {
    function: Tool.Function;

    type: 'function';
  }

  export namespace Tool {
    export interface Function {
      description: string;

      name: string;

      parameters: Function.Parameters;
    }

    export namespace Function {
      export interface Parameters {
        properties: { [key: string]: Parameters.Properties };

        required: Array<string>;

        type: string;
      }

      export namespace Parameters {
        export interface Properties {
          description?: string;

          type?: string;
        }
      }
    }
  }
}

export declare namespace Chat {
  export {
    type ChatGenerateCompletionResponse as ChatGenerateCompletionResponse,
    type ChatGenerateCompletionParams as ChatGenerateCompletionParams,
  };
}
