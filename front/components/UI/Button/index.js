import React from 'react'

export default function Button({ className, title, children, onClickHandler }) {
    return (
        <div>
            <button className={`${className}`} onClick={onClickHandler}>
                {title ? title : ''}
                {children}
            </button>
        </div >
    )
}

