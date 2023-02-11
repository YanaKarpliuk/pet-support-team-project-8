import NoticesCategoriesItem from "../NoticesCategoriesItem/NoticeCategoiresItem"
import elements from "./NoticesCategoriesList.styled"

const { List } = elements

const NoticesCategoriesList = ({ contents = [] }) => {
    const items = contents.map((data) => {
        return <NoticesCategoriesItem key={data.id} info={data} />
    })

    return (<List>{items}</List>)
}

export default NoticesCategoriesList