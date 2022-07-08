import { Card } from './Card'
import './CardList.css'

export function CardList({ personajes }) {


	return (
		<div className='container-list'>
			{
				personajes?.map(personaje => (
					<Card key={personaje.id} character={personaje} />
				))
			}
		</div>
	)
}