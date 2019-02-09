import React from 'react';

function Total(props) {
    return <div className="Total">
    {props.getTotal ? <p className="Total_sum"> {props.getTotal}</p> : null}
    </div>
}

export default Total;