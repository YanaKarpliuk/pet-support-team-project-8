import NoticesCategoriesItem from "../NoticesCategoriesItem/NoticeCategoiresItem"

const NoticesCategoriesList = ({ contents }) => {
    const items = contents.map((data) => {
        return <NoticesCategoriesItem key={data.id} info={data} />
    })

    return (<ul>{items}</ul>)
}

export default NoticesCategoriesList