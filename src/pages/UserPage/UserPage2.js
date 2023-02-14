import { Helmet } from 'react-helmet';

import UserData from '../../components/UserData2/UserData';
// import UserPets from '../components/PetsElements/UserPets';

import { UserInfoContainer } from './UserPage2.styled';

const UserPage = () => {
  return (
    <div>
      {/* <Helmet>
      <title>UserPage</title>
      </Helmet> */}

      <UserInfoContainer>
        <UserData />
        {/* <UserPets /> */}
      </UserInfoContainer>
    </div>
  );
};

export default UserPage;
