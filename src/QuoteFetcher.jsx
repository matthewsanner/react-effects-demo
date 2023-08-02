import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://api.quotable.io/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ content: "", author: "" });

  // Have to wrap async function in a sync function here, gets a quote only on initial render
  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    setQuote(jsonResponse);
  }

  return (
    <div>
      <h2>{quote.content}</h2>
      <h4>-{quote.author}</h4>
      <button onClick={fetchQuote}>Get Quote</button>
    </div>
  );
}
