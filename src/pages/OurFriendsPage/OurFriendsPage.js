import elements from './OurFriendsPage.styled';

const {
  Container,
  Card,
  ImageBox,
  ContentBox,
  TitleLink,
  ContentLink,
  ContentA,
  ContentItem,
  ContentItemTime,
  Box,
  List,
  ContentItemModal,
  ContentItemModalSchedude,
  ContentItemModalDay,
  Title
} = elements;

const OurFriendsPage = () => {
  const friendsData = [
    {
      id: 1,
      name: 'Whiskas',
      time: '8:00-19:00',
      address: 'Grigorenka str, 28',
      email: 'email@email.com',
      phone: '066 488 0480',
    },
    {
      id: 2,
      name: 'Whiskas',
      time: '8:00-19:00',
      address: 'Grigorenka str, 28',
      email: 'email@email.com',
      phone: '066 488 0480',
    },
    {
      id: 3,
      name: 'Whiskas',
      time: '8:00-19:00',
      address: 'Grigorenka str, 28',
      email: 'email@email.com',
      phone: '066 488 0480',
    },
    {
      id: 4,
      name: 'Whiskas',
      time: '8:00-19:00',
      address: 'Grigorenka str, 28',
      email: 'email@email.com',
      phone: '066 488 0480',
    },
    {
      id: 5,
      name: 'Whiskas',
      time: '8:00-19:00',
      address: 'Grigorenka str, 28',
      email: 'email@email.com',
      phone: '066 488 0480',
    },
    {
      id: 6,
      name: 'Whiskas',
      time: '8:00-19:00',
      address: 'Grigorenka str, 28',
      email: 'email@email.com',
      phone: '066 488 0480',
    },
    {
      id: 7,
      name: 'Whiskas',
      time: '8:00-19:00',
      address: 'Grigorenka str, 28',
      email: 'email@email.com',
      phone: '066 488 0480',
    },
    {
      id: 8,
      name: 'Whiskas',
      time: '8:00-19:00',
      address: 'Grigorenka str, 28',
      email: 'email@email.com',
      phone: '066 488 0480',
    },
    {
      id: 9,
      name: 'Whiskas',
      time: '8:00-19:00',
      address: 'Grigorenka str, 28',
      email: 'email@email.com',
      phone: '066 488 0480',
    },
  ];

  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  return (
    <Container>
      <Title>Our friends</Title>
      <List>
        {friendsData.map(item => {
          return (
            <Card key={item.id}>
              <TitleLink to="https://google.com" target="_blank">
                {item.name}
              </TitleLink>
              <Box>
                <ImageBox></ImageBox>
                <ContentBox>
                  <ContentItemTime>
                    <p>Time:</p>
                    <p>{item.time}</p>
                    <ContentItemModal>
                      {days.map(day => {
                        return (
                          <ContentItemModalSchedude key={day}>
                            <ContentItemModalDay>{day}</ContentItemModalDay>
                            <p>{item.time}</p>
                          </ContentItemModalSchedude>
                        );
                      })}
                    </ContentItemModal>
                  </ContentItemTime>
                  <ContentItem>
                    <p>Address:</p>
                    <ContentLink to="https://google.com" target="_blank">
                      {item.address}
                    </ContentLink>
                  </ContentItem>
                  <ContentItem>
                    <p>Email:</p>
                    <ContentA href={`mailto:${item.email}`}>{item.email}</ContentA>
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
