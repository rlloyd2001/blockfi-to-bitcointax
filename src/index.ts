/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import moment from 'moment';
import logger from './logger';
import { parseCsv } from './parse-csv';
import { stringifyCsv } from './stringify-csv';

logger.info('starting app', { arguments: process.argv });

const toBitcoinTaxDate = (value: string): string => {
  return moment(value, 'YYYY-MM-DD').format('YYYY-MM-DD');
};

const isUsd = (currency: string): boolean => {
  return currency.indexOf('USD') > -1 || currency.indexOf('DAI') > -1;
};

const totalUsdInterest = (input: string[][]): number => {
  const usdRows = input
    .filter((row) => {
      return isUsd(row[0]);
    })
    .map((row) => Number(row[1]));
  return usdRows.reduce((a, b) => a + b, 0);
};

const nonUsdRows = (input: string[][]): string[][] => {
  return input.filter((row) => {
    return !isUsd(row[0]);
  });
};

const transformNexo = (input: string[][], year: string): { values: string[][]; usdInterest: number } => {
  input = input.filter((row) => {
    return row[3].indexOf(year) > -1;
  });
  input = input.filter((row) => {
    return row[2] === 'Interest Payment';
  });
  const usdInterest = totalUsdInterest(input);
  input = nonUsdRows(input);
  const retval = [['Date', 'Action', 'Account', 'Symbol', 'Volume']];
  for (let i = 0; i < input.length; i += 1) {
    const row = input[i];
    retval.push([toBitcoinTaxDate(row[3]), 'INCOME', 'BlockFi', row[0], row[1]]);
  }
  return { values: retval, usdInterest };
};

async function main(): Promise<void> {
  const inputFName = process.argv[2];
  const outputFName = process.argv[3];
  const year = process.argv[4];

  const inputData = fs.readFileSync(inputFName).toString();
  logger.info('main', { inputDataLength: inputData.length });
  const inputCsv = await parseCsv(inputData);
  logger.info('main', { inputCsvFirstRows: [...inputCsv].slice(0, 10) });
  const { values, usdInterest } = transformNexo(inputCsv, year);
  const outputCsv = values;
  logger.info('main', { outputCsvFirstRows: [...outputCsv].slice(0, 10) });
  const outputData = await stringifyCsv(outputCsv);
  logger.info('main', { outputData });
  fs.writeFileSync(outputFName, outputData);
  logger.info(`USD Interest for ${year}: $${usdInterest.toFixed(2)}`);
}

main().then(() => {
  logger.info('ending app');
});
