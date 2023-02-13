import NewsEl from "../NewsEl/NewsEl"
import elements from "./NewsList.styled"
import NotFound from '../../components/NotFound/NotFound';

const { List } = elements

const NewsList = ({ contents, query }) => {
    let contentsNeeded = contents
    if (query) {
        contentsNeeded = contents.filter(({ title }) => title.toLowerCase().includes(query))
    }

    const items = contentsNeeded.map((itemData) => {
        return <NewsEl key={itemData.id} info={itemData} />
    })
    if (items.length === 0) {
        return <NotFound />
    } else {
        return <List items={items.length}>{items}</List>
    }
}

export default NewsList