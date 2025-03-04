import { useState, useEffect } from "react";

// custom hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
		setTimeout(()=>{
			fetch(url)
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
				setError(err.message);
				setIsPending(false);
			})
		}, 1000)
	}, [url]); // empty dependency array only runs once on the first render, or add any state values that should trigger useeffect when their state changes

  return { data, isPending, error }
}

export default useFetch;
