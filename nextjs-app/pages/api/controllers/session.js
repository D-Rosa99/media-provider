export const getSession = (otherApi) => {
  try {
    const userData = otherApi();
    return `Welcome to my page ${userData.firstName} ${userData.lastName}`;
  } catch (error) {
    return `Sorry, something went wrong ${error}`;
  }
};
