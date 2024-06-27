This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Delete the node_modules inside your current project
If you need to revisite the project, go into the folder then execute npm install in the terminal
to reinstall node_modules

1 - Create a new next application
https://nextjs.org/docs/getting-started/installation

    What is your project named? whatever-the-hell-you-want
    Would you like to use TypeScript? No
    Would you like to use ESLint? No
    Would you like to use Tailwind CSS? No
    Would you like to use `src/` directory? Yes
    Would you like to use App Router? (recommended) No
    Would you like to customize the default import alias (@/*)? No
    What import alias would you like configured? @/*

2 - Follow the figma for the design:
https://www.figma.com/design/cUB0c8E6AS7Q8hyCGhTuCV/FoodWagon-Food-Delivery-Landing-Template-by-ThemeWagon-(Community)?node-id=401-1227&t=4r1lrsv90OSoz8ws-0

3 - Use https://fakestoreapi.com/products tu get data products

4 - display the products with the same design

5 - Create a sticky basket

6 - The basket must display: - the title - the price - remove item from basket

    for each item added to the basket

7 - The basket need to display the total price

8 - BONUS:

    Add a button on the basket to minimize it
    Once minimized the basket will only display the number of items inside it and the total price

BE CAREFULL

    You need to devide the project in components
    Use the components when it makes sense

    Variables name needs to have sense
    Use styles correctly
