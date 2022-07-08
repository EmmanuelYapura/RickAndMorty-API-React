export async function getCharacters(page , name){
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name? name : ''}`)
        const data = await response.json()
        return data.error ? {error: 'No se encontraron personajes'} : data 
    } catch (error) {
        console.log(error)
    }
}

export async function getCharacterById(id){
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log('Error en el personaje a buscar',error)
    }
}
