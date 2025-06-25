# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatGenerateCompletionResponse</a></code>

Methods:

- <code title="post /chat/completions">client.chat.<a href="./src/resources/chat.ts">generateCompletion</a>({ ...params }) -> ChatGenerateCompletionResponse</code>

# Audio

Types:

- <code><a href="./src/resources/audio.ts">AudioReasoningResponse</a></code>
- <code><a href="./src/resources/audio.ts">AudioTranscribeResponse</a></code>
- <code><a href="./src/resources/audio.ts">AudioTranslateResponse</a></code>

Methods:

- <code title="post /audio/reasoning">client.audio.<a href="./src/resources/audio.ts">reasoning</a>({ ...params }) -> AudioReasoningResponse</code>
- <code title="post /audio/transcriptions">client.audio.<a href="./src/resources/audio.ts">transcribe</a>({ ...params }) -> AudioTranscribeResponse</code>
- <code title="post /audio/translations">client.audio.<a href="./src/resources/audio.ts">translate</a>({ ...params }) -> AudioTranslateResponse</code>

# Embedding

Types:

- <code><a href="./src/resources/embedding.ts">EmbeddingGenerateResponse</a></code>

Methods:

- <code title="post /embeddings">client.embedding.<a href="./src/resources/embedding.ts">generate</a>({ ...params }) -> EmbeddingGenerateResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelRetrieveResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /models/{model_id}">client.models.<a href="./src/resources/models.ts">retrieve</a>(modelID) -> ModelRetrieveResponse</code>
- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
