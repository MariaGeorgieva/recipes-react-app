import { MdCheckCircle } from 'react-icons/md'

export default function IngredientsList({
    id,
    name,
    measures,
}) {
    return (
        <li className="list-element">
            <MdCheckCircle />
            {measures.metric.amount} {measures.metric.unitShort} {name}</li>

    );
};