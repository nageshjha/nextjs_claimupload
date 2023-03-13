This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

Rest API endpoint-
[1] Get the list of claims for a user (userId is given as input to the API
//http://localhost:3000/api/get_user/10712729

[2] Get the list of documents for a the claimNumber provided
http://localhost:3000/api/get_document/222222

Note- Use postman to test this app.
Required: Pass Authorization token in headers to access the API.
Example:
Authorization: test_token
