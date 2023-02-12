import elements from "./NotFound.styled"

const { Container, Face } = elements

const NotFound = () => {
    return (
        <Container>
            <span>Unfortunately, nothing was found</span>
            <Face>-_-</Face>
        </Container>
    )
}
export default NotFound