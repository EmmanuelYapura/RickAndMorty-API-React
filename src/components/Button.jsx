import './Button.css'

export function Button({ reset}){

    return (
        <div>
            <button onClick={reset} className='button-reset'></button>
        </div>
    )
}