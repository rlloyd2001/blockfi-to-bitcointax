# BlockFi To BitcoinTax

This script has saved me many hours of data entry for interest earned.
What this script does is take a .csv file from BlockFi and create a .csv file that can be
uploaded into the Income section of bitcoin.tax.

Download transactions .csv from blockfi.com to use with this script.
Not tested much. Review your generated .csv before uploading to bitcoin.tax to make sure this is what you are needing.

Filters out USD and prints a yearly total in the console of USD interest.

## Prerequisites
*   NodeJs (v14.x)
*   Npm

## Getting Started
*   ```npm install```
*   ```npm run build```
*   ```npm run start -- <blockfi_transactions.csv file> <blockfi-output.csv> <year>```

# Example
```bash
npm run build && npm run start -- transactions.csv blockfi-output.csv 2020
```

## Donate with PayPal or Monero

Did you find this helpful? Leave a tip here.

### PayPal
https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=rlloyd2001%40gmail.com&currency_code=USD

### XMR Address
47cyVWpADRPUnTEVLmtaVXQjPtK4Viufk8MfMy3u3abjARdgLX8A2moi2PsPYDBEcWFMACMzCYq7T5bWdogAEVaRTebZ2k4
