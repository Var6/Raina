// Import Axios
import axios from 'axios';

// Define your Instagram app credentials
const appId = process.env.INSTAGRAM_APP_ID;
const appSecret = process.env.INSTAGRAM_APP_SECRET;
const redirectUri = 'http://localhost:3000';

// Define the authorization URL
const authorizationUrl = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

// Make a GET request to the authorization URL
axios.get(authorizationUrl)
  .then(response => {
    // Get the authorization code from the response URL
    const authorizationCode = response.request.res.responseUrl.split('=')[1];

    // Define the access token URL
    const accessTokenUrl = `https://api.instagram.com/oauth/access_token`;

    // Define the access token request data
    const accessTokenData = {
      client_id: appId,
      client_secret: appSecret,
      grant_type: 'authorization_code',
      code: authorizationCode,
      redirect_uri: redirectUri
    };

    // Make a POST request to the access token URL
    axios.post(accessTokenUrl, accessTokenData)
      .then(response => {
        // Get the access token from the response data
        const accessToken = response.data.access_token;

        // Log the access token to the console
        console.log('Access Token:', accessToken);
      })
      .catch(error => {
        // Log any errors to the console
        console.error('Error obtaining access token:', error);
      });
  })
  .catch(error => {
    // Log any errors to the console
    console.error('Error obtaining authorization code:', error);
  });