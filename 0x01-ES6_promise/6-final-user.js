import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  let user;
  let photo;
  try {
    user = await signUpUser(firstName, lastName);
    photo = await uploadPhoto(fileName);
    return await Promise.all([user, photo]);
  } catch (err) {
    return err.toString();
  }
}
