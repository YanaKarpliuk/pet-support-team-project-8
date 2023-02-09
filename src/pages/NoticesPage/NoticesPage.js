import SearchBar from "../../components/SearchBar/SearchBar";
import AddNoticeButton from "../../components/AddNoticeButton/AddNoticeButton";
import NoticesCategoriesNav from "../../components/NoticesCategoriesNav/NoticesCategoriesNav";
import elements from "./NoticesPage.styled";

const { Header, Container } = elements;

const NoticesPage = () => {
    return (
        <Container>
            <Header style={{ textAlign: "center" }}>Find your favorite pet</Header>
            <SearchBar />
            <div>
                <NoticesCategoriesNav />
                <AddNoticeButton />
            </div>
        </Container>
    );
};
export default NoticesPage;
