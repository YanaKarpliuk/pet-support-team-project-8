import elements from "./SearchBar.styled"
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../redux/search/searchSlice"
import searchSelectors from "../../redux/search/searchSelectors";
import { Formik } from 'formik';
import FormError from "../FormError/FormError";
import { useEffect } from "react";
import * as Yup from "yup";

const { StyledForm, Input, SearchBtn, SearchBarContainer, MugnifyingGlass, CrissCross, ClearBtn } = elements
const { selectSearchState } = searchSelectors

const SearchBar = () => {
    const dispatch = useDispatch()
    const searchValue = useSelector(selectSearchState)

    useEffect(() => {
        dispatch(setSearch(''))
    }, [dispatch])

    const handleChange = (e) => {
        const input = e.target.value.toLowerCase();
        dispatch(setSearch(input));
    }

    const clear = () => {
        dispatch(setSearch(''))
    }

    const SearchSchema = Yup.object().shape({
        search: Yup.string()
            .required("Value required"),
    });

    return (<SearchBarContainer>
        <Formik
            initialValues={{
                search: searchValue
            }}
            validationSchema={SearchSchema}
            validateOnChange={true}
            enableReinitialize={true}
            validateOnBlur={false}
        >
            {({ errors }) => (
                <StyledForm>
                    <Input type="text" value={searchValue} name="search" placeholder="Search" onChange={handleChange} />
                    {errors.search ? <FormError name="search" /> : null}
                    <SearchBtn exist={searchValue} type="submit">
                        <MugnifyingGlass />
                    </SearchBtn>
                    <ClearBtn type="button" onClick={clear} exist={searchValue}>
                        <CrissCross />
                    </ClearBtn>
                </StyledForm>
            )}
        </Formik >
    </SearchBarContainer >
    )
}

export default SearchBar