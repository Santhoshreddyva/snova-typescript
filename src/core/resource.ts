// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Sambanova } from '../client';

export abstract class APIResource {
  protected _client: Sambanova;

  constructor(client: Sambanova) {
    this._client = client;
  }
}
