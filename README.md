# Next Wallet

Server side wallet. REST API to interact with a wallet.

## Run Locally

Clone

`git clone https://github.com/Next-Wallet/next-wallet.git`

Create `.env.local`

`cp .env.local.example .env.local`

```
PRIVATE_KEY=cc44c6f12b8fa5c731e962bf47970ebae236c7d5c0c40028855775799913f0ec
API_KEY=key_to_allow_sending
```

Install dependencies

```bash
npm install 
# or
yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## REST Endpoint Docs

https://documenter.getpostman.com/view/1292391/UzXKWJp4

## Deploy with Vercel

https://vercel.com/

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnext-wallet%2Fnext-wallet)
