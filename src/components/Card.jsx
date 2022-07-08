import './Card.css'


export function Card( { character }) {

	return (
		<div className='container-card'>

			<header className='title'>
			<p>{ character.name }</p>
			<p>{ character.status }</p>
			</header>
			<div className='container-stats'>

			<img className='image' src={ character.image } alt="character" />
			<div className="stats">
				<p className='text-center'>{ character.species } | { character.gender }</p>
				<p className='text-center'>{ character.origin.name }</p>
				<p>{ character.created }</p>
			</div>
			</div>
		</div>
	)
}