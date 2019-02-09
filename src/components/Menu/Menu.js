import React from 'react';

function Menu(props) {
    return <div className="Menu">
        <div>
            {props.children}
        </div>
    </div>
}

export default Menu