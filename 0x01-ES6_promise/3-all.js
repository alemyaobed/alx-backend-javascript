import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  uploadPhoto().then((response) => {
    console.log(response.body);
  }).catch(() => {
    console.error('Signup system offline');
  });
  createUser().then((response) => {
    console.log(response.firstName);
    console.log(response.lastName);
  }).catch(() => {
    console.error('Signup system offline');
  });
}

export default handleProfileSignup;
