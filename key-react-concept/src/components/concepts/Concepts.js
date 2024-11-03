import './Concepts.css';
import ConceptItem from './ConceptItem';

const Concepts = (props) => {
	const concepts = props.concepts;
	return (
		<div className='concepts'>
			{concepts.map(concept => <ConceptItem concept={concept} />)}
		</div>
	)
}

export default Concepts;