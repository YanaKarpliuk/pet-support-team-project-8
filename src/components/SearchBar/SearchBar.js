import elements from "./SearchBar.styled"

const { Form, Input, SearchBtn, SearchBarContainer, MugnifyingGlass, CrissCross, ClearBtn } = elements

const SearchBar = ({ handleQuery }) => {

    return (
        <SearchBarContainer>
            <Form onSubmit={handleQuery}>
                <Input type="text" name="search" placeholder="Search" />

                <SearchBtn type="submit">
                    <MugnifyingGlass />
                </SearchBtn>
                <ClearBtn type="button">
                    <CrissCross />
                </ClearBtn>
            </Form>
        </SearchBarContainer >
    )
}

export default SearchBar