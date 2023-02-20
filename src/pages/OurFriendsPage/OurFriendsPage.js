import elements from './OurFriendsPage.styled';
import levImg from '../../images/friends/lev.png';
import barbosImg from '../../images/friends/barbos.png';
import whiskasImg from '../../images/friends/whiskas.png';
import happyImg from '../../images/friends/happy.png';
import pethelpImg from '../../images/friends/pethelp.png';
import siriusImg from '../../images/friends/sirius.png';
import purinaImg from '../../images/friends/purina.png';
import joseraImg from '../../images/friends/josera.png';
import licoImg from '../../images/friends/LIKO.png';
import { Helmet } from 'react-helmet';

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
  Title,
} = elements;

const OurFriendsPage = () => {
  const friendsData = [
    {
      id: 1,
      name: 'ЛКП "ЛЕВ"',
      time: '8:00-19:00',
      address: 'Promuslova Street, 56',
      email: 'lkplev@gmail.com ',
      phone: '(032) 293-30-41',
      image: levImg,
      map: 'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9F%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%B0,+56,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8633373,24.0422761,17z/data=!3m1!4b1!4m5!3m4!1s0x473add029a8fe451:0xd4feea53902f6bf8!8m2!3d49.8633339!4d24.0444648?hl=ua',
      website: 'https://lkplev.com/',
    },
    {
      id: 2,
      name: 'Барбос',
      time: '8:00-20:00',
      address: 'Grigorenka str, 25',
      email: 'barbos@gmail.com',
      phone: '066 488 0480',
      map: 'https://www.google.com.ua/maps/search/Grigorenka+str,+25/@50.4852215,30.4195934,12z/data=!3m1!4b1?hl=ua',
      website: 'https://www.facebook.com/NGO.Barbos/',
      image: barbosImg,
    },
    {
      id: 3,
      name: 'Whiskas',
      time: '',
      address: '',
      email: 'whiskas@gmail.com',
      phone: '0–800–500–155',
      map: '',
      website: 'https://www.whiskas.ua/',
      image: whiskasImg,
    },
    {
      id: 4,
      name: 'Happy Paw',
      time: '8:00-19:00',
      address: 'Chota Rystaveli Street, 44 ',
      email: 'hello@happypaw.ua',
      phone: '+380 44 290-03-29',
      map: 'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D1%96,+44,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8297648,24.0298833,17z/data=!3m1!4b1!4m5!3m4!1s0x473add673f3f9cad:0xc794b4c090129508!8m2!3d49.8297614!4d24.032072?hl=ua',
      website: 'https://happypaw.ua/ua',
      image: happyImg,
    },
    {
      id: 5,
      name: 'PetHelp',
      time: '',
      address: '',
      email: 'pithelp.ukr@gmail.com',
      phone: '',
      map: '',
      website: 'https://pethelp.com.ua/',
      image: pethelpImg,
    },
    {
      id: 6,
      name: 'Сіріус',
      time: '11:00-16:00',
      address: 'Fedorivka, Kyiv Oblast',
      email: 'dogcat.sirius@gmail.com',
      phone: '+38 093 193 40 69',
      map: 'https://www.google.com.ua/maps/place/%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D1%96%D0%B2%D0%BA%D0%B0,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB.,+08511/@50.1244484,29.6876002,15z/data=!3m1!4b1!4m5!3m4!1s0x472ca9049d921caf:0x2962acad180ebe46!8m2!3d50.1235948!4d29.6977061?hl=ua',
      website: 'https://dogcat.com.ua/',
      image: siriusImg,
    },
    {
      id: 7,
      name: 'Purina',
      time: '',
      address: '',
      email: 'info@ua.nestle.com',
      phone: '1-800-778-7462',
      map: '',
      website: 'https://www.purina.ua/',
      image: purinaImg,
    },
    {
      id: 8,
      name: 'Josera',
      time: '09:00-17:00',
      address: 'Sholom-Aleikhema St, 11',
      email: 'info@josera.ua',
      phone: '0800 409 060',
      map: 'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%BE%D0%BB%D0%BE%D0%BC-%D0%90%D0%BB%D0%B5%D0%B9%D1%85%D0%B5%D0%BC%D0%B0,+11,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8441876,24.0179762,17z/data=!3m1!4b1!4m5!3m4!1s0x473add746590ecfd:0xfe63a64916b1ce14!8m2!3d49.8441842!4d24.0201649?hl=ua',
      website: 'https://josera.ua/',
      image: joseraImg,
    },
    {
      id: 9,
      name: 'LICO',
      time: '9:00-20:00',
      address: 'Dryhetiv Street, 77',
      email: 'lico@gmail.com',
      phone: '+38 097 509 8005',
      map: 'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%94%D1%80%D1%83%D0%B3%D0%B5%D1%82%D1%96%D0%B2,+77,+%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+88000/@48.6269751,22.3037714,17z/data=!3m1!4b1!4m5!3m4!1s0x473919b7db05fdd7:0xcca8cef9963e1358!8m2!3d48.6269716!4d22.3059601?hl=ua',
      website: 'https://lico.vet/',
      image: licoImg,
    },
  ];

  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  return (
    <Container>
      <Helmet>
        <title>Our friends</title>
      </Helmet>
      <Title>Our friends</Title>
      <List>
        {friendsData.map(item => {
          return (
            <Card key={item.id}>
              <TitleLink to={`${item.website}`} target="_blank">
                {item.name}
              </TitleLink>
              <Box>
                <ImageBox><img src={`${item.image}`} alt="logo"/></ImageBox>
                <ContentBox>
                  {item.time ? (
                    <ContentItemTime>
                      <p>Time:</p>
                      <p>{item.time}</p>
                      <ContentItemModal>
                        {days.map(day => {
                          return (
                            <ContentItemModalSchedude key={day}>
                              <p>{day}</p>
                              <p>{item.time}</p>
                            </ContentItemModalSchedude>
                          );
                        })}
                      </ContentItemModal>
                    </ContentItemTime>
                  ) : (
                    <div>
                      <p>Time:</p>
                      <p>----------------------------------</p>
                    </div>
                  )}
                  <ContentItem>
                    <p>Address:</p>
                    {item.address ? (
                      <ContentLink to={`${item.map}`} target="_blank">
                        {item.address}
                      </ContentLink>
                    ) : (
                      <p>----------------------------------</p>
                    )}
                  </ContentItem>
                  <ContentItem>
                    <p>Email:</p>
                    {item.email ? (
                      <ContentA href={`mailto:${item.email}`}>{item.email}</ContentA>
                    ) : (
                      <p>----------------------------------</p>
                    )}
                  </ContentItem>
                  <ContentItem>
                    <p>Phone:</p>
                    {item.phone ? (
                      <ContentA href={`tel:${item.phone}`}>{item.phone}</ContentA>
                    ) : (
                      <p>----------------------------------</p>
                    )}
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
