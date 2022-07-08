import './Pagination.css'

export function Pagination({ numberPage , changeButton }){


    return(
        <div className='container-pagination'>
            <button onClick={() => changeButton(-1)}>Previous</button>
                <div className='number-page'> | {numberPage} | </div>
            <button  onClick={() => changeButton(1)}>Next</button>
        </div>
    )
}