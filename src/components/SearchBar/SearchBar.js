import elements from "./SearchBar.styled"
import { toast, ToastContainer } from 'react-toastify';
import toastInfoOptions from "../../utils/toastInfoOptions";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../redux/search/searchSlice"
import searchSelectors from "../../redux/search/searchSelectors";
import { Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";

const { StyledForm, Input, SearchBtn, SearchBarContainer, MugnifyingGlass, CrissCross, ClearBtn } = elements
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

    const SearchSchema = Yup.object().shape({
        search: Yup.string()
            .required('Value is required'),
    });

    return (<SearchBarContainer>
        <Formik
            initialValues={{
                search: ''
            }}
            validationSchema={SearchSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {() => (
                <StyledForm>
                    <Input type="text" value={searchValue} name="search" placeholder="Search" onChange={handleChange} />
                    <ErrorMessage name="search" />
                    <SearchBtn exist={searchValue} type="submit">
                        <MugnifyingGlass />
                    </SearchBtn>
                    {/* <ClearBtn type="button" onClick={clear} exist={searchValue}>
                        <CrissCross />
                    </ClearBtn> */}
                </StyledForm>
            )}
        </Formik >
    </SearchBarContainer >
    )
}

export default SearchBar