import React from 'react';

const Item = (props) => {
    const { name } = props.item
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default Item;