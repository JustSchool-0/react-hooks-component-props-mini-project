import React from 'react';

function Article({id, title, date, preview, minutes}) {
    const articleDate = date ? date : "January 1, 1970";
    return (<article key={id}>
        <h3>{title}</h3>
        <small>{`${articleDate} · ${getReadTime(minutes)}`}</small>
        <p>{preview}</p>
    </article>)
}

function getReadTime(minutes = 1) {
    if (minutes >= 30) {
        const numIcons = (Math.ceil(minutes / 10) * 10) / 10;
        return `${"🍱".repeat(numIcons)} ${minutes} min read`;
    } else {
        const numIcons = (Math.ceil(minutes / 5) * 5) / 5;
        return `${"☕️".repeat(numIcons)} ${minutes} min read`;
    }
}

export default Article;