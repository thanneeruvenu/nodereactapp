import { useState, useEffect } from "react";
export default function RestFetchService(url, params) {

  const [data, setData] = useState([]);
  
   async function get(url, params) {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    get();
  }, []);
  

  return data;
}

