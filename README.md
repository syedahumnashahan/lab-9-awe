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

## Chrome DevTools Network Tab – Loading Time Observation
Chrome DevTools was used to observe the loading times of SSR, SSG, and CSR pages.
1. Opened the project in Google Chrome.
2. Pressed F12 to open Chrome DevTools.
3. Selected the Network tab.
4. Enabled Disable cache.
5. Reloaded each page to observe its loading time.
6. Recorded the loading times using the Finish value displayed at the bottom of the Network tab.
Observation: SSG generally loads faster because its HTML is pre-generated. SSR requires server-side processing, while CSR fetches data in the browser after the page loads.

## Best Use Cases

- SSR: Dynamic websites, dashboards and pages requiring fresh data on every request.
- SSG: Blogs, documentation, portfolios and websites with mostly static content.
- CSR: Interactive applications, user dashboards and applications where data can load after the page appears.

## Conclusion

SSR, SSG and CSR provide different approaches to rendering web pages. SSR is suitable for frequently changing data, SSG is suitable for fast-loading static content, and CSR is suitable for highly interactive applications. The best method depends on the application's requirements.
