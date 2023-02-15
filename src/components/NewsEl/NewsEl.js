import elements from "./NewsEl.styled";
import React from "react";
const EllipsisText = require("react-ellipsis-text").default;

window.React = React;

const { ListItem, FirstHalf, Title, Text, SecondHalf, Date, Link } = elements;

const NewsEl = ({ info }) => {
    const { title, description, date, url } = info;

    return (
        <ListItem>
            <FirstHalf>
                <Title><EllipsisText text={title} length={38} /></Title>
                <Text><EllipsisText text={description} length={213} /></Text>
            </FirstHalf>
            <SecondHalf>
                <Date>{date}</Date>
                <Link href={url} target="_blank" rel="noreferrer">Read more</Link>
            </SecondHalf>
        </ListItem>
    )
}

export default NewsEl