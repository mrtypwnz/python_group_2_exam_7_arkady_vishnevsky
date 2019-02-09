import React from 'react';

function Menu(props) {
    return <div className="panel">
        <div>
            {props.children}
        </div>
    </div>
}

export default Menu