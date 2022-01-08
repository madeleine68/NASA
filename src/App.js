import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from './ListItem';
import Counter from './Counter'
function App() {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get('https://epic.gsfc.nasa.gov/api/natural?api_key=cXNjZedzExuCvVSFn28kniBHlixfVIuYJ9YNfHcp')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <Counter/>
      <ListItem data={data} />
      
    </div>
  );
}

export default App;
