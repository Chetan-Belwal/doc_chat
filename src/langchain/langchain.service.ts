/* eslint-disable @typescript-eslint/no-misused-promises */
import { OllamaEmbeddings } from '@langchain/ollama';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OllamaEmbeddingConfig } from '../environment/interfaces/langchainModel';
import { createReadStream } from 'node:fs';
import * as pdfParser from 'pdf-parse';

@Injectable()
export class LangchainService implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}
  #embeddingModel: OllamaEmbeddings;
  //   readonly #generativeModel;

  onModuleInit() {
    // Right now i am only initializing the embedding model

    const ollamaConfig: OllamaEmbeddingConfig =
      this.configService.get<OllamaEmbeddingConfig>(
        'langchainConfig.ollamaEmbeddings',
      );

    this.#embeddingModel = new OllamaEmbeddings({
      model: ollamaConfig.modelName,
    });
  }

  /**
   * Generate embeddings for a text file.
   * @param path The path to the file to generate embeddings for.
   * @returns A promise that resolves to a number array containing the embeddings.
   * @example
   */
  public async generateEmbeddings(
    path: string,
    normalize = true,
  ): Promise<number[]> {
    const readFileStream = createReadStream(path);

    const chunks = [];

    await new Promise((res, rej) => {
      readFileStream
        .on('data', (chunk) => {
          chunks.push(chunk);
        })
        .on('end', () => {
          res(0);
        })
        .on('error', (err) => {
          rej(err);
        });
    });

    const content = Buffer.concat(chunks);

    const pdfContent = await pdfParser(content);

    console.log(pdfContent);

    const vectorEmbedding: number[] = await this.#embeddingModel.embedQuery(
      pdfContent.text,
    );

    if (normalize) {
      // Euclidean norm
      const norm = Math.sqrt(vectorEmbedding.reduce((x, y) => x + y ** 2, 0));

      return norm > 0
        ? vectorEmbedding.map((val) => val / norm)
        : vectorEmbedding;
    }

    return vectorEmbedding;
  }
}
