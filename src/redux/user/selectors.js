export const getPetsLoading = ({ user }) => user.loading;
export const getIsDeletePetLoading = ({ user }) => user.isDeletePetLoading;
export const getUserPets = ({ user }) => user.pets;
export const getAddPetError = ({ user }) => user.addPetError;
export const getUserError = ({ user }) => user.error;
export const getUserFavorite = ({ user }) => user.user.favorite;
export const getUserId = ({ user }) => user.user._id;