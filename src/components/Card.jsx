import './Card.css'

export function Card({ caracter }) {
	return (
		<div className='container-card'>

			<header className='title'>
				<p>{caracter.name}</p>
				<p>{caracter.status}</p>
			</header>
			<div className='container-stats'>
				<img className='image' src={caracter.image} alt="caracter" />
				<div className="stats">
					<p className='text-center'>{caracter.species} | {caracter.gender}</p>
					<p className='text-center'>{caracter.origin.name}</p>
					<p>{caracter.created}</p>
				</div>
			</div>
		</div>
	);
};