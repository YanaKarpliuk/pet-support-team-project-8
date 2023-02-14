const selectUser = ({ auth: { email, name, phone, city, avatarURL, id, birthday } }) => ({
  id,
  email,
  name,
  phone,
  city,
  avatarURL,
  birthday,
});
const selectError = ({ auth }) => auth.error;
const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
const selectIsLoading = ({ auth }) => auth.isLoading;

const authSelectors = { selectUser, selectError, selectIsLoggedIn, selectIsLoading };
export default authSelectors;
