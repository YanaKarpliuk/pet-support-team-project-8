const selectFriends = state => state.friends.items;
const selectFriendsError = state => state.friends.error;
const selectIsFriendsLoading = state => state.friends.isLoading;

const FriendsSelectors = { selectFriends, selectFriendsError, selectIsFriendsLoading };

export default FriendsSelectors;