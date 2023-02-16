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
// const selectError = ({ auth }) => auth.error;
// const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
// const selectIsLoading = ({ auth }) => auth.isLoading;

const selectError = s => s.auth.error;
const selectIsLoggedIn = s => s.auth.isLoggedIn;
const selectIsLoading = s => s.auth.isLoading;
const selectIsRefreshing = s => s.auth.isRefreshing;

const authSelectors = {
  selectUser,
  selectError,
  selectIsLoggedIn,
  selectIsLoading,
  selectIsRefreshing,
};
export default authSelectors;
