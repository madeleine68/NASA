import './App.css';
import { GlobalStyle } from './Styles/globalStyles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from './ListItem';
const API_KEY = process.env.REACT_APP_NASA_KEY;
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const count = 10
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${count}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])
  // console.log("response:",data)
  return (
    <div className="App">
      <GlobalStyle />
      <ListItem data={data} />
    </div>
  );
}

export default App;
