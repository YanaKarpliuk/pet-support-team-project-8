import elements from "./NoticesCategoriesNav.styled"

const { Option, Container } = elements;

const NoticesCategoriesNav = () => {
    return (<Container>
        <Option type="button">lost/found</Option>
        <Option type="button">in good hands</Option>
        <Option type="button">sell</Option>
    </Container>)
}

export default NoticesCategoriesNav