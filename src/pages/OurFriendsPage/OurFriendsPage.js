import elements from "./OurFriendsPage.styled";

const {
  Container,
  Card,
  ImageBox,
  ContentBox,
  TitleLink,
  ContentLink,
  ContentA,
  ContentItem,
  Box,
  List
} = elements;

const OurFriendsPage = () => {
  const friendsData = [
    {
      name: "Whiskas",
      time: "8:00-19:00",
      address: "Grigorenka str, 28",
      email: "email@email.com",
      phone: "066 488 0480",
    },
    {
      name: "Whiskas",
      time: "8:00-19:00",
      address: "Grigorenka str, 28",
      email: "email@email.com",
      phone: "066 488 0480",
    },
    {
      name: "Whiskas",
      time: "8:00-19:00",
      address: "Grigorenka str, 28",
      email: "email@email.com",
      phone: "066 488 0480",
    },
    {
      name: "Whiskas",
      time: "8:00-19:00",
      address: "Grigorenka str, 28",
      email: "email@email.com",
      phone: "066 488 0480",
    },
    {
      name: "Whiskas",
      time: "8:00-19:00",
      address: "Grigorenka str, 28",
      email: "email@email.com",
      phone: "066 488 0480",
    },
    {
      name: "Whiskas",
      time: "8:00-19:00",
      address: "Grigorenka str, 28",
      email: "email@email.com",
      phone: "066 488 0480",
    },
    {
      name: "Whiskas",
      time: "8:00-19:00",
      address: "Grigorenka str, 28",
      email: "email@email.com",
      phone: "066 488 0480",
    },
    {
      name: "Whiskas",
      time: "8:00-19:00",
      address: "Grigorenka str, 28",
      email: "email@email.com",
      phone: "066 488 0480",
    },
    {
      name: "Whiskas",
      time: "8:00-19:00",
      address: "Grigorenka str, 28",
      email: "email@email.com",
      phone: "066 488 0480",
    },
  ];

  return (
    <Container>
      <List>
        {friendsData.map((item) => {
          return (
            <Card key={item.name}>
              <TitleLink to="https://google.com" target="_blank">
                {item.name}
              </TitleLink>
              <Box>
                <ImageBox
                ></ImageBox>
                <ContentBox>
                  {/*link */}
                  <ContentItem>
                    <p>Time:</p>
                    <p>{item.time}</p> {/*dropdown */}
                  </ContentItem>
                  <ContentItem>
                    <p>Address:</p>
                    <ContentLink to="https://google.com" target="_blank">
                      {item.address}
                    </ContentLink>
                  </ContentItem>
                  <ContentItem>
                    <p>Email:</p>
                    <ContentA href={`mailto:${item.email}`}>
                      {item.email}
                    </ContentA>
                  </ContentItem>
                  <ContentItem>
                    <p>Phone:</p>
                    <ContentA href={`tel:${item.phone}`}>{item.phone}</ContentA>
                  </ContentItem>
                </ContentBox>
              </Box>
            </Card>
          );
        })}
      </List>
    </Container>
  );
};
export default OurFriendsPage;
