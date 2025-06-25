// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Models extends APIResource {
  /**
   * Retrieve a specific model
   */
  retrieve(modelID: string, options?: RequestOptions): APIPromise<ModelRetrieveResponse> {
    return this._client.get(path`/models/${modelID}`, options);
  }

  /**
   * List available models
   */
  list(options?: RequestOptions): APIPromise<ModelListResponse> {
    return this._client.get('/models', options);
  }
}

export interface ModelRetrieveResponse {
  id?: string;

  context_length?: number;

  max_completion_tokens?: number;

  object?: string;

  owned_by?: string;

  pricing?: ModelRetrieveResponse.Pricing;
}

export namespace ModelRetrieveResponse {
  export interface Pricing {
    completion?: string;

    prompt?: string;
  }
}

export interface ModelListResponse {
  data?: Array<ModelListResponse.Data>;

  object?: string;
}

export namespace ModelListResponse {
  export interface Data {
    id?: string;

    context_length?: number;

    max_completion_tokens?: number;

    object?: string;

    owned_by?: string;

    pricing?: Data.Pricing;
  }

  export namespace Data {
    export interface Pricing {
      completion?: string;

      prompt?: string;
    }
  }
}

export declare namespace Models {
  export { type ModelRetrieveResponse as ModelRetrieveResponse, type ModelListResponse as ModelListResponse };
}
