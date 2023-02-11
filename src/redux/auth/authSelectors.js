const selectUser = ({ auth: { email, name, phone, city, avatarURL, id } }) => ({
  id,
  email,
  name,
  phone,
  city,
  avatarURL,
});
const selectError = ({ auth }) => auth.error;
const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
const selectIsLoading = ({ auth }) => auth.isLoading;

const authSelectors = { selectUser, selectError, selectIsLoggedIn, selectIsLoading };
export default authSelectors;
