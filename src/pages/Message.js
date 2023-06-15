import React, { memo } from 'react';

export default memo(function Message({ numberOfMesage, onIcrement }) {
    console.log('message render');
    return (
        <div>
            <p>send {numberOfMesage} message</p>
            <button onClick={onIcrement}>Increment Message Number</button>
        </div>
    );
});
