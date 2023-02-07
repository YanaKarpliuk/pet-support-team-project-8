import elements from "./SearchBar.styled"
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai"
const { Form, Input, SearchBtn, SearchBarContainer } = elements

const SearchBar = ({ handleQuery }) => {

    return (
        <SearchBarContainer>
            <Form onSubmit={handleQuery}>
                <Input type="text" name="search" placeholder="Search" />
                <IconContext.Provider value={{ style: { verticalAlign: 'bottom', width: "20px", height: "20px" } }}>
                    <SearchBtn type="submit"><AiOutlineSearch /></SearchBtn>
                </IconContext.Provider>
            </Form>
        </SearchBarContainer>
    )
}

export default SearchBar