export const getPetsLoading = ({ user }) => user.loading;
export const getIsDeletePetLoading = ({ user }) => user.isDeletePetLoading;
export const getUserPets = ({ user }) => user.pets;
export const getAddPetError = ({ user }) => user.addPetError;
export const getUserError = ({ user }) => user.error;
export const getUserFavorite = ({ user }) => user.user.favorite;
export const getUserId = ({ user }) => user.user._id;

// export const getUserLoading = ({ user }) => user.userLoading;
// export const getLoadingUpdate = ({ user }) => user.isLoadingUpdate;
// export const getDisabledFields = ({ user }) => user.isDisabledFields;
// export const getUserWithPets = ({ user }) => user.user;
// export const getUserInfo = ({ user }) => user.user.userInfo;
// export const getUserAvatar = ({ user }) => user.user.avatarURL;
// export const getIsAddedPetSuccess = ({ user }) => user.isAddedPetSuccess;
