/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-var-requires */
import logger from './logger';
const stringify = require('csv-stringify');

export const stringifyCsv = async (values: string[][]): Promise<string> => {
  return new Promise((resolve: any, reject: any) => {
    stringify(values, function (err: any, output: string) {
      if (err) {
        logger.error(err);
        reject(err);
      } else {
        resolve(output);
      }
    });
  });
};
