import elements from "./LoadMore.styled";

const { Container, LoadMore } = elements

const LoadMoreBtn = () => {
    return (
        <Container>
            <LoadMore type="button">
                Load more
            </LoadMore>
        </Container>
    );
};

export default LoadMoreBtn