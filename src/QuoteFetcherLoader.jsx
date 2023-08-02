import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://api.quotable.io/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ content: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);

  // Have to wrap async function in a sync function here, gets a quote only on initial render
  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    setQuote(jsonResponse);
    setIsLoading(false);
  }

  return (
    <div>
      <p className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>
        Loading...
      </p>
      <h2>{quote.content}</h2>
      <h4>-{quote.author}</h4>
    </div>
  );
}
