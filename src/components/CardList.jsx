import { Card } from './Card'
import './CardList.css'

export function CardList({ characters }) {


	return (
		<div className='container-list'>
			{
				characters?.map(character => (
					<Card key={character.id} character={character} />
				))
			}
		</div>
	)
}