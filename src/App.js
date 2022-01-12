import { GlobalStyle } from './Styles/globalStyles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from './ListItem';

const API_KEY = process.env.REACT_APP_NASA_KEY;
const callCount = 10;

function App() {
  const [isLoading, setLoading] = useState(true); 
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${callCount}`)
    .then(res => {
      setData(res.data)
      setLoading(false) 
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      <ListItem isLoading={isLoading} data={data} />
    </div>
  );
}

export default App;
