import SearchBar from "../../components/SearchBar/SearchBar";
import AddNoticeButton from "../../components/AddNoticeButton/AddNoticeButton";
import NoticesCategoriesNav from "../../components/NoticesCategoriesNav/NoticesCategoriesNav";
import elements from "./NoticesPage.styled";
import NoticesCategoriesList from "../../components/NoticesCategoriesList/NoticesCategoriesList";

const { Header, Container, CategoriesCont } = elements;

const NoticesPage = () => {
    return (
        <Container>
            <Header style={{ textAlign: "center" }}>Find your favorite pet</Header>
            <SearchBar />
            <CategoriesCont>
                <NoticesCategoriesNav />
                <AddNoticeButton />
            </CategoriesCont>
            <NoticesCategoriesList />
        </Container>
    );
};
export default NoticesPage;
