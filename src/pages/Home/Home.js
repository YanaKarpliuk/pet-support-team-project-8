import womanImg from "../../images/home/woman.png";
import elements from "./Home.styled";

const Home = () => {
  const { Box, Title, ImgWrap, Container } = elements;

  return (
    <Container>
      <Box>
        <Title>Take good care of your small pets</Title>
        <ImgWrap>
          <img src={womanImg} alt="woman with a dog" />
        </ImgWrap>
      </Box>
    </Container>
  );
};
export default Home;
