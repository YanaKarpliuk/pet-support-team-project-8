import SearchBar from "../../components/SearchBar/SearchBar";
import AddNoticeButton from "../../components/AddNoticeButton/AddNoticeButton";
import NoticesCategoriesNav from "../../components/NoticesCategoriesNav/NoticesCategoriesNav";
import elements from "./NoticesPage.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const { Section, Header, Container, CategoriesCont } = elements;

const NoticesPage = () => {
    return (
        <Section>
            <Container>
                <Header style={{ textAlign: "center" }}>Find your favorite pet</Header>
                <SearchBar />
                <CategoriesCont>
                    <NoticesCategoriesNav />
                    <AddNoticeButton />
                </CategoriesCont>
                <Suspense><Outlet /></Suspense>
            </Container>
        </Section>
    );
};
export default NoticesPage;
