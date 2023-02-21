import elements from './OurFriendsPage.styled';
import img from '../../images/friends/images.png';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import friendsSelectors from '../../redux/friends/friendsSelectors';
import { useEffect } from 'react';
import friendsOperations from '../../redux/friends/friendsOperation';

const { selectFriends, selectFriendsError, selectIsFriendsLoading } = friendsSelectors;
const { fetchFriends } = friendsOperations;

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
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  const dispatch = useDispatch();
  const friends = useSelector(selectFriends);
  const error = useSelector(selectFriendsError);
  const loading = useSelector(selectIsFriendsLoading);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Helmet>
            <title>Our friends</title>
          </Helmet>
          <Title>Our friends</Title>
          <List>
            {friends.map(item => {
              return (
                <Card key={item._id}>
                  <TitleLink to={`${item.url}`} target="_blank">
                    {item.title}
                  </TitleLink>
                  <Box>
                    <ImageBox>
                      <img src={`${item.imageUrl ? item.imageUrl : img}`} alt="logo" />
                    </ImageBox>
                    <ContentBox>
                      {item.workDays ? (
                        <ContentItemTime>
                          <p>Time:</p>
                          <p>
                            {item.workDays !== null &&
                              item.workDays.length > 1 &&
                              item.workDays[0].from}{' '}
                            -{' '}
                            {item.workDays !== null &&
                              item.workDays.length > 1 &&
                              item.workDays[0].to}
                          </p>
                          <ContentItemModal>
                            {days.map(day => {
                              return (
                                <ContentItemModalSchedude key={day}>
                                  <p>{day}</p>
                                  <p>
                                    {item.workDays !== null &&
                                      item.workDays.length > 1 &&
                                      item.workDays[0].from}{' '}
                                    -{' '}
                                    {item.workDays !== null &&
                                      item.workDays.length > 1 &&
                                      item.workDays[0].to}
                                  </p>
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
                          <ContentLink to={`${item.addressUrl}`} target="_blank">
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
      )}
    </>
  );
};
export default OurFriendsPage;
