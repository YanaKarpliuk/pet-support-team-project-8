import NoticesCategoriesItem from "../NoticesCategoriesItem/NoticeCategoiresItem"
import elements from "./NoticesCategoriesList.styled"
import NotFound from "../NotFound/NotFound"

const { List } = elements

const NoticesCategoriesList = ({ contents, query }) => {
    let contentsNeeded = contents
    if (query) {
        contentsNeeded = contents.filter(({ title }) => title.toLowerCase().includes(query))
    }

    const items = contentsNeeded.map((itemData) => {
        return <NoticesCategoriesItem key={itemData.id} info={itemData} />
    })

    if (items.length === 0) {
        return <NotFound />
    } else {
        return <List>{items}</List>
    }
}

export default NoticesCategoriesList