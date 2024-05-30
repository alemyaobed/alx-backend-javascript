function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    console.log('Promise fulfilled');
  }).catch(() => {
    console.log('Got a response from the API');
    console.log('Promise rejected');
  });
}
export default handleResponseFromAPI;
