/**
 * @jest-environment node
 */
import logger from '../src/logger';
import { parseCsv } from '../src/parse-csv';

describe('transform', () => {
  it('transform crowdnode csv to bitcoin tax csv', async () => {
    const crowdnodeCsvData = `Transaction,Type,Currency,Amount,Details,Outstanding Loan,Date / Time
NXT6kywiy20OI,Interest,ETH,0.00061477,approved / ETH Interest Earned,$0.00,2020-12-31 01:00:02
NXTURG8qa7NW7,Interest,PAXG,0.00013338,approved / PAXG Interest Earned,$0.00,2020-12-31 01:00:02
NXTBX1cHmXp39,Interest,BTC,0.00002624,approved / BTC Interest Earned,$0.00,2020-12-31 01:00:02
NXT8SgMfmoGNT,Interest,DAI,0.82160330,approved / DAI Interest Earned,$0.00,2020-12-31 01:00:02
`;
    const output = await parseCsv(crowdnodeCsvData);
    logger.info('', { output });
  });
});
