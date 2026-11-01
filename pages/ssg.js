 // This function fetches joke data to generate the page.
 export async function getStaticProps() {
    // Sends a request to the Joke API to get a random joke.
    const res = await fetch(
      'https://official-joke-api.appspot.com/random_joke'
    );
  
    // Converts the API response into a JavaScript object.
    const joke = await res.json();
  
    // Returns the joke data as props for the page component.
    return {
      props: {
        joke, // Passes the fetched joke to the page.
      },
  
      // Regenerates the static page after 10 seconds when a new request arrives.
      revalidate: 10,
    };
  }
  
  // Creates the page component and receives the joke through props.
  export default function SSGPage({ joke }) {
    // Returns the HTML content that will be displayed on the page.
    return (
      <div>
        {/* Displays the heading of the SSG page. */}
        <h1>Static Site Generation (SSG)</h1>
  
        {/* Displays the setup or first part of the joke. */}
        <p>{joke.setup}</p>
  
        {/* Displays the punchline in bold text. */}
        <p>
          <strong>{joke.punchline}</strong>
        </p>
      </div>
    );
  }
