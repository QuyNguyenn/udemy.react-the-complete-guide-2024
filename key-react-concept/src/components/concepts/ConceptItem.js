import './ConceptItem.css';
import Card from '../ui/Card.js';

const ConceptItem = props => {
	const { image, title, description } = props.concept;

	return (
		<Card className='concept'>
			<img src={image} alt={title} />
			<h2>{title}</h2>
			<p>{description}</p>
		</Card>
	)
}

export default ConceptItem;