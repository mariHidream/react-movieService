import {useEffect, useState } from 'react';
// coins
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setConis] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then((json)=>{
      setConis(json);
      setLoading(false)
    })
  },[])
  return (
    <>
    <h1>The Conis{loading ? "" : `(${coins.length})`}</h1>
    {loading ? <strong>Loading.....</strong> : <select>
      {coins.map((coin) => <option>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
    </select>}
    
    </>
  );
}


export default App;
