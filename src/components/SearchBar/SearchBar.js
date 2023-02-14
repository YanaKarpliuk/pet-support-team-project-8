import elements from "./SearchBar.styled"
import { toast, ToastContainer } from 'react-toastify';
import toastInfoOptions from "../../utils/toastInfoOptions";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../redux/search/searchSlice"
import searchSelectors from "../../redux/search/searchSelectors";

const { Form, Input, SearchBtn, SearchBarContainer, MugnifyingGlass, CrissCross, ClearBtn } = elements
const { selectSearchState } = searchSelectors

const SearchBar = () => {
    const dispatch = useDispatch()
    const searchValue = useSelector(selectSearchState)

    const handleChange = (e) => {
        const input = e.target.value.trim().toLowerCase();
        dispatch(setSearch(input));
    }

    const clear = () => {
        dispatch(setSearch(''))
    }

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
                <Input type="text" value={searchValue} name="search" placeholder="Search" onChange={handleChange} />

                <SearchBtn exist={searchValue} type="submit">
                    <MugnifyingGlass />
                </SearchBtn>
                <ClearBtn type="button" onClick={clear} exist={searchValue}>
                    <CrissCross />
                </ClearBtn>

            </Form>
        </SearchBarContainer >
    )
}

export default SearchBar