// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Embedding extends APIResource {
  /**
   * Generate embeddings for input text
   */
  generate(body: EmbeddingGenerateParams, options?: RequestOptions): APIPromise<EmbeddingGenerateResponse> {
    return this._client.post('/embeddings', { body, ...options });
  }
}

export interface EmbeddingGenerateResponse {
  data?: Array<EmbeddingGenerateResponse.Data>;

  model?: string;

  object?: string;

  usage?: EmbeddingGenerateResponse.Usage;
}

export namespace EmbeddingGenerateResponse {
  export interface Data {
    embedding?: Array<number>;

    index?: number;

    object?: string;
  }

  export interface Usage {
    prompt_tokens?: number;

    total_tokens?: number;
  }
}

export interface EmbeddingGenerateParams {
  input: string | Array<string>;

  model: string;
}

export declare namespace Embedding {
  export {
    type EmbeddingGenerateResponse as EmbeddingGenerateResponse,
    type EmbeddingGenerateParams as EmbeddingGenerateParams,
  };
}
