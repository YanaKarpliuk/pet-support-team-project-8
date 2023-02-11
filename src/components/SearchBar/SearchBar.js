import { useState } from "react"
import elements from "./SearchBar.styled"

const { Form, Input, SearchBtn, SearchBarContainer, MugnifyingGlass, CrissCross, ClearBtn } = elements

const SearchBar = ({ handleQuery, }) => {
    const [query, setQuery] = useState('')

    const clear = (event) => {
        setQuery('')
    }
    return (
        <SearchBarContainer>
            <Form onSubmit={handleQuery}>
                <Input type="text" value={query} name="search" placeholder="Search" onChange={e => setQuery(e.currentTarget.value)} />

                <SearchBtn exist={query} type="submit">
                    <MugnifyingGlass />
                </SearchBtn>
                <ClearBtn type="button" onClick={clear} exist={query}>
                    <CrissCross />
                </ClearBtn>

            </Form>
        </SearchBarContainer >
    )
}

export default SearchBar