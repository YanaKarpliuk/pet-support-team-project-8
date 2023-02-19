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

const selectError = s => s.auth.error;
const selectIsLoggedIn = s => s.auth.isLoggedIn;
const selectIsLoading = s => s.auth.isLoading;
const selectIsRefreshing = s => s.auth.isRefreshing;
const selectFavorite = s => s.auth.favorite;

const authSelectors = {
  selectUser,
  selectError,
  selectIsLoggedIn,
  selectIsLoading,
  selectIsRefreshing,
  selectFavorite,
};
export default authSelectors;
