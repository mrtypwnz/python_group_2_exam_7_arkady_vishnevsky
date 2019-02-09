import React from 'react';


function Order(props) {
    return (
        <div className="Order">
        {props.getCount() ? <p>{props.children}</p> :
        <div>
            <p className="mt-3">Empty stash</p>
            <p>You can add some food!</p>
        </div>}
    </div>
    )
};

export default Order;