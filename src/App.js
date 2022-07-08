import { useState, useEffect, useRef } from 'react';
import * as API from './services/API'
import { Navbar } from './components/Navbar';
import { CardList } from './components/CardList';
import { Pagination } from './components/Pagination'
import { Error } from './components/Error'
import './App.css';

function App() {
  /* Estos estados manejan los 20 personajes por separado */
  const [personajes, setPersonajes] = useState({}) //
  const [nroPagina, setNroPagina] = useState(1)
 
  const [textSearch, setTextSearch] = useState("")
	const inputSearch = useRef(null)
 
    useEffect(() => {//
      API.getCharacters(nroPagina,textSearch).then(data => setPersonajes(data))
    }, [nroPagina,textSearch])
  
    const avanzarPagina = (nro) => {
      if (!personajes.info.prev && nroPagina + nro <= 0) return
      if (!personajes.info.next && nroPagina + nro >= personajes.info.pages) return
  
      setNroPagina(nroPagina + nro)
    }

  const onChangeText = (event) => {
    let text = inputSearch.current.value
    console.log(text)
  }

  const onSearchSubmit = (event) => {
    if (event.key !== 'Enter') return
    /* Si entra, seteo nuevamente el nroPagina, creo que falta setear personajes! cuando hago enter */
    setNroPagina(1)
    setTextSearch(inputSearch.current.value)
    inputSearch.current.value = ""
  }

  const resetCharacters = () => {
    setNroPagina(1)
    setTextSearch('')
  }

  return (
    <div className="App">
      <div className='navbar'>
        <Navbar 
        referencia={inputSearch} 
        cambioInput={onChangeText} 
        envioTexto={onSearchSubmit}
        buttonRest={resetCharacters}
        />
      </div>
     <div className='cards'>
        {
          personajes.error? 
          <Error />
          :
          <CardList personajes={personajes?.results}/>
        }
      </div>
      <div className='pagination'>
        <Pagination 
        pagina={nroPagina} 
        modificaBtn={avanzarPagina}
        />   
      </div> 
    </div>
  );
}

export default App;
