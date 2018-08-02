export const socialLogin = selectedProvider => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  try {
    let user = await firebase.login({
      provider: selectedProvider,
      type: "popup"
    });
    console.log(user);
    if (user.additionalUserInfo.isNewUser) {
      await firebase.set(`users/${user.user.uid}`, {
        displayName: user.profile.displayName,
        photoURL: user.profile.avatarUrl
      });
    }
  } catch (error) {
    console.log(error);
  }
};
