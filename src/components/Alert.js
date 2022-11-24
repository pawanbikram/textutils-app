import React from 'react';

const capitalize = (word) => {
    const newWord = word.split(" ").map((e) => { return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(); }).join("");
    return newWord;
}
export default function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <b>{capitalize(props.alert.type)}</b> : <i>{props.alert.message}</i>
        </div>
    )
}
