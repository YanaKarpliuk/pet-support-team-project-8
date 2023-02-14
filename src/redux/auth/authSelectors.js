const selectUser = ({
  auth: { email, name, phone, city, avatarURL, id, birthday, token, isLoggedIn },
}) => ({
  id,
  email,
  name,
  phone,
  city,
  avatarURL,
  birthday,
  token,
  isLoggedIn,
});
const selectError = ({ auth }) => auth.error;
const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
const selectIsLoading = ({ auth }) => auth.isLoading;

const authSelectors = { selectUser, selectError, selectIsLoggedIn, selectIsLoading };
export default authSelectors;
