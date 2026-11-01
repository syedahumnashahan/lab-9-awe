// Ye function server par page render hone se pehle chalta hai
export async function getServerSideProps() {
    // API se random joke lene ke liye request bhej rahe hain
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
  
    // API ke response ko JSON data mein convert kar rahe hain
    const joke = await res.json();
  
    // Data ko props ke zariye page component ko bhej rahe hain
    return {
      // Props object component ko data provide karta hai
      props: {
        joke, // Pura joke object props mein pass kar rahe hain
      },
    };
  }
  // Ye main page component hai jo joke ko display karta hai
  export default function SSRPage({ joke }) {
    // Page ka HTML structure return kar rahe hain
    return (
      // Div tamam page content ko ek container mein rakhta hai
      <div>
        {/* Page ki heading show karte hain */}
        <h1>Server-Side Rendering (SSR)</h1>
  
        {/* Joke ka pehla hissa yani setup show karte hain */}
        <p>{joke.setup}</p>
  
        {/* Joke ka punchline bold text mein show karte hain */}
        <p><strong>{joke.punchline}</strong></p>
      </div>
    );
  }
