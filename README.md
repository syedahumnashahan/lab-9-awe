# LAB 9 – Rendering Methods in Next.js

## Project Overview
This project demonstrates three rendering methods in Next.js:

1. Server-Side Rendering (SSR)
2. Static Site Generation (SSG)
3. Client-Side Rendering (CSR)

The Official Joke API is used to fetch random jokes and display them on the pages.

## Technologies Used
- React.js
- Next.js
- JavaScript
- Official Joke API
- Chrome DevTools

## Project Pages

### 1. SSR – Server-Side Rendering
SSR fetches data on the server for every incoming page request using `getServerSideProps()`.

### 2. SSG – Static Site Generation
SSG generates the page at build time using `getStaticProps()`. The page uses `revalidate: 10` to allow regeneration after 10 seconds when a new request arrives.

### 3. CSR – Client-Side Rendering
CSR fetches data in the browser using React's `useEffect()` and `useState()` hooks. A loading message appears until the joke is received.

## Performance Comparison

| Method | Data Fetching | Performance |
|---|---|---|
| SSR | On every server request | Requires server processing for each request |
| SSG | At build time | Usually fastest page delivery |
| CSR | In the browser | Initial content may take longer to appear |

## Chrome DevTools Testing

The Network tab was used to observe page loading times for all three methods.

Actual test results:

- SSR: [Enter measured time]
- SSG: [Enter measured time]
- CSR: [Enter measured time]

## Best Use Cases

- SSR: Dynamic websites, dashboards and pages requiring fresh data on every request.
- SSG: Blogs, documentation, portfolios and websites with mostly static content.
- CSR: Interactive applications, user dashboards and applications where data can load after the page appears.

## Conclusion

SSR, SSG and CSR provide different approaches to rendering web pages. SSR is suitable for frequently changing data, SSG is suitable for fast-loading static content, and CSR is suitable for highly interactive applications. The best method depends on the application's requirements.
