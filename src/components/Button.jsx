import './Button.css'

export function Button({ resetear }){
    return (
        <div>
            <button onClick={ resetear } className='button-reset'></button>
        </div>
    );
};