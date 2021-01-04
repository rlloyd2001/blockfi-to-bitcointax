# BlockFi To BitcoinTax

Download transactions .csv from blockfi.com to use with this script.
Not tested much, use at your own risk.  

Filters out USD and provides a yearly total of USD interest.

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
