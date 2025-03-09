import { useState, useEffect } from "react";

// custom hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

// place cleanup function inside useEffect
  useEffect(() => {
		const abortCont = new AbortController();

		setTimeout(()=>{
			fetch(url, { signal: abortCont.signal })
			.then(res => {
				if(!res.ok) {
					throw Error('Could not fetch the data for this resource.');
				}
				return res.json();
			})
			.then(data => {
				setData(data);
				setIsPending(false);
				setError(null);
			})
			.catch(err => {
				if (err.name === 'AbortError'){
					console.log('Fetch aborted.')
				} else {
					setIsPending(false);
					setError(err.message);
				}				
			})
		}, 1000);

		return () => abortCont.abort();
	}, [url]); // empty dependency array only runs once on the first render, or add any state values that should trigger useeffect when their state changes

  return { data, isPending, error }
}

export default useFetch;
