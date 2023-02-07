import elements from "./NewsEl.styled";

const { ListItem, FirstHalf, Title, Text, SecondHalf, Date, Link } = elements;

const NewsEl = ({ info }) => {
    const { title, text, date, link } = info;

    return (
        <ListItem>
            <FirstHalf>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </FirstHalf>
            <SecondHalf>
                <Date>{date}</Date>
                <Link href={link} target="_blank" rel="noreferrer">Read more</Link>
            </SecondHalf>
        </ListItem>
    )
}

export default NewsEl