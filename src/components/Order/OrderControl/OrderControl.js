import React from 'react';
import {  Button } from 'reactstrap';
function OrderControl(props) {
    return <div className="OrderControl">
        <div className="Remove">
            {props.count ? <p>
                {props.name} x {props.count} {props.total}
                <Button onClick={() => props.changeProduct(props.name, -1)}>Remove from stash</Button>
            </p>
            : null}
        </div>
    </div>
}

export default OrderControl;