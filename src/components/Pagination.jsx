import './Pagination.css'

export function Pagination({ pagina , modificaBtn }){


    return(
        <div className='container-pagination'>
            <button onClick={() => modificaBtn(-1)}>Previous</button>
                <div className='number-page'> | {pagina} | </div>
            <button  onClick={() => modificaBtn(1)}>Next</button>
        </div>
    )
}