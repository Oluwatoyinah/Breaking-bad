import CharacterList from "./components/CharacterList";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from "./components/Loader";


const App = () => {
  const[items, setItems] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[query, setQuery] = useState('')

    useEffect(() => {
        const fetchItem = async () => {
            let output = await axios(`https://breakingbadapi.com/api/characters?name=${query}`);
            console.log(output.data)

            setItems(output.data);
            setIsLoading(false)
        }
        fetchItem();
    }, [query])

   

  return (
    <div>
       <Header />
       <Search getQuery={(q) => setQuery(q)} />
       { isLoading ? <Loader /> : <CharacterList items={items} />} 
    </div>
  );
}

export default App;
