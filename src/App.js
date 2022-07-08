import { useState, useEffect, useRef } from 'react';
import * as API from './services/API'
import { Navbar } from './components/Navbar';
import { CardList } from './components/CardList';
import { Pagination } from './components/Pagination'
import { Error } from './components/Error'
import './App.css';

function App() {
  const [personajes, setPersonajes] = useState({})
  const [page, setPage] = useState(1)

  const [textSearch, setTextSearch] = useState("")
  const inputSearch = useRef(null)

  useEffect(() => {
    API.getCharacters(page, textSearch).then(data => setPersonajes(data))
  }, [page, textSearch])

  const nextPage = (number) => {
    if (!personajes.info.prev && page + number <= 0) return
    if (!personajes.info.next && page + number >= personajes.info.pages) return

    setPage(page + number)
  }

  const onChangeText = (event) => {
    let text = inputSearch.current.value
    console.log(text)
  }

  const onSearchSubmit = (event) => {
    if (event.key !== 'Enter') return
    setPage(1)
    setTextSearch(inputSearch.current.value)
    inputSearch.current.value = ""
  }

  const resetCharacters = () => {
    setPage(1)
    setTextSearch('')
  }

  return (
    <div className="App">
      <div className='navbar'>
        <Navbar
          reference={inputSearch}
          changeInput={onChangeText}
          sendText={onSearchSubmit}
          buttonRest={resetCharacters}
        />
      </div>
      <div className='cards'>
        {
          personajes.error ?
            <Error />
            :
            <CardList characters={personajes?.results} />
        }
      </div>
      <div className='pagination'>
        <Pagination
          numberPage={page}
          changeButton={nextPage}
        />
      </div>
    </div>
  );
}

export default App;
