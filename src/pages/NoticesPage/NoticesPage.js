import SearchBar from "../../components/SearchBar/SearchBar";
import SearchOptions from "../../components/SearchOptions/SearchOptions";
import elements from "./NoticesPage.styled";

const { Header, Container } = elements;

const NoticesPage = () => {
    return (
        <Container>
            <Header style={{ textAlign: "center" }}>Find your favorite pet</Header>
            <SearchBar />
            <div>
                <SearchOptions />
            </div>
        </Container>
    );
};
export default NoticesPage;
