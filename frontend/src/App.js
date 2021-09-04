import './App.css';
import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios'

function App() {
  const [allData, setAllData] = useState([]);

  const url = 'http://localhost:5000/books/books'

    const getBooks = useCallback(() => {
        axios
        .get(`${url}`, {
            params: {
                name: 'Book 1',
            }
        })
        .then(res => {
            if (res.data.length > 0) {
                const result = res.data
                console.log(result)
                setAllData(result)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        }, []);

        useEffect(() => {
          getBooks();
        }, [getBooks])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
