import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
    const dateTimeConverted = (nanoSeconds) => {
        const milisecond = nanoSeconds / 1000000;
        const date = new Date(milisecond);
        console.log(date);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        month < 10 && (month = `0${month}`);
        let day = date.getDay();
        day < 10 && (day = `0${day}`);

        let hours = date.getHours();
        hours < 10 && (hours = `0${hours}`);

        let minutes = date.getMinutes();
        minutes < 10 && (minutes = `0${minutes}`);

        let seconds = date.getSeconds();
        seconds < 10 && (seconds = `0${seconds}`);

        return `${month}/${day}/${year} - ${hours}:${minutes}:${seconds}`;
    };

    return (
        <>
            <h2>Messages</h2>
            {messages.map((message, i) => (
                // TODO: format as cards, add timestamp
                <p key={i} className={message.premium ? 'is-premium' : ''}>
                    <strong>{message.sender}</strong> - {dateTimeConverted(message.created)}:<br />
                    {message.title}
                    <br />
                    {message.message}
                    <br />
                </p>
            ))}
        </>
    );
}

Messages.propTypes = {
    messages: PropTypes.array,
};
