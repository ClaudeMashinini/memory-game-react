import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Card({
    handleClick,
    id,
    type,
    flipped,
    height,
    width,
}) {
    return (
        <div
            className={`container-flip ${flipped ? 'flipped' : ''}`}
            style={{
                width,
                height,
            }}
}
    )
}