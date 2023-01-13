import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Input from './components/Input';

function App() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState(null)
  const [filteredResults, setFilteredResults] = useState([]);
  const URL = `https://www.googleapis.com/books/v1/volumes?q=how&key=AIzaSyDsE-CE_fXoriHXGL1JWzqqu9aNH-gEKNM`
  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setData(response.data.items);
      })
  }, [URL])
  
  return (
    < >
      <Header />
      <div />
      <div style={{ padding: 20 }}>
        
        <div itemsPerRow={3} style={{ marginTop: 20 }}>
          {search.length > 1 ? (
            data.map((item,index) => {
              return (
                <div key={index}>
                 <Card a={item}/>
                </div>
              )
            })
          ) : (
            APIData.map((item) => {
              return (
                <div>
                  <div>
                    <div>{item.name}</div>
                    <div>
                      {item.email}
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>

    </>
  );
}

export default App;
