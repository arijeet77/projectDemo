import propTypes from 'prop-types';

const PropsTypesExample = (props) => {

    return (
        <div>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
        </div>
    );
}

PropsTypesExample.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}

PropsTypesExample.defaultProps = {
    name: 'Rohit',
    age: 25
}

export default PropsTypesExample;