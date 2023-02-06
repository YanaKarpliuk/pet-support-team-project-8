import NewsEl from "../NewsEl/NewsEl"
import elements from "./NewsList.styled"

const { List } = elements

const NewsList = ({ contents }) => {
    const items = contents.map((data) => {
        return <NewsEl key={data.id} info={data} />
    })

    return (
        <List>
            {items}
        </List>
    )
}

export default NewsList