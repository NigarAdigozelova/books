import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';

function App() {
  const [search, setSearch] = useState("")
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDsE-CE_fXoriHXGL1JWzqqu9aNH-gEKNM`
  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [URL])
  
  return (
    < >
      <Header />
      <div />
      <div style={{ padding: 20 }}>
        
        <div itemsPerRow={3} style={{ marginTop: 20 }}>
          {search.length > 1 ? (
            filteredResults.map((item) => {
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
