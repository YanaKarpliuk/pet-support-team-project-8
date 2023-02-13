import elements from "./SearchBar.styled"
import { toast, ToastContainer } from 'react-toastify';
import toastInfoOptions from "../../utils/toastInfoOptions";

const { Form, Input, SearchBtn, SearchBarContainer, MugnifyingGlass, CrissCross, ClearBtn } = elements

const SearchBar = ({ handleQuery, clearQuery, value }) => {
    const submiting = (e) => {
        e.preventDefault()
        if (!e.target.search.value) {
            toast.info("Make sure you've entered your query", toastInfoOptions)
            return
        }
    }

    return (
        <SearchBarContainer>
            <ToastContainer />
            <Form onSubmit={submiting}>
                <Input type="text" value={value} name="search" placeholder="Search" onChange={handleQuery} />

                <SearchBtn exist={value} type="submit">
                    <MugnifyingGlass />
                </SearchBtn>
                <ClearBtn type="button" onClick={clearQuery} exist={value}>
                    <CrissCross />
                </ClearBtn>

            </Form>
        </SearchBarContainer >
    )
}

export default SearchBar