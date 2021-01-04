/* eslint-disable @typescript-eslint/no-var-requires,@typescript-eslint/no-explicit-any */
import logger from './logger';
const parse = require('csv-parse');

export const parseCsv = (input: string): Promise<string[][]> => {
  return new Promise<any>((resolve, reject) => {
    parse(input, {}, function (err: any, output: any[]) {
      if (err) {
        logger.error('parseCsv - error');
        logger.error(err);
        reject(err);
      } else {
        logger.info('parseCsv - success', { outputLength: output.length });
        resolve(output);
      }
    });
  });
};
