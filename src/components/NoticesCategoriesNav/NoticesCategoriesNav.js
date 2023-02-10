import elements from "./NoticesCategoriesNav.styled"

const { Option, Container } = elements;

const NoticesCategoriesNav = () => {
    return (<Container>
        <li> <Option type="button">lost/found</Option></li>
        <li><Option type="button">in good hands</Option></li>
        <li><Option type="button">sell</Option></li>
    </Container>)
}

export default NoticesCategoriesNav