import elements from "./SearchOptions.styled"

const { Option, Container } = elements;

const SearchOptions = () => {
    return (<Container>
        <Option type="button">lost/found</Option>
        <Option type="button">in good hands</Option>
        <Option type="button">sell</Option>
    </Container>)
}

export default SearchOptions