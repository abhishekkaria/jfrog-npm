import React from 'react';

const MyButton = ({ label, onClick }) => {
    return React.createElement(
        'button',
        { onClick: onClick, style: styles.button },
        label
    );
};

const styles = {
    button: {
        padding: '10px 20px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default MyButton;
