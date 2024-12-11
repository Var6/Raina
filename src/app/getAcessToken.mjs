// pages/api/instagram.js
import axios from 'axios';
const appId = 1321020419060776;
const appSecret = `45a99b671eaef563f8b161f317cb1066`;
const redirectUri = 'http://localhost:3000';

console.log('Starting script...');
const authorizationUrl = `https://graph.facebook.com/oauth/access_token
  ?client_id=${appId}
  &client_secret=${appSecret}
  &grant_type=client_credentials`;

console.log('Authorization URL:', authorizationUrl);

axios.get(authorizationUrl)
  .then(response => {
    console.log('Authorization response:', response);

    const authorizationCode = response.request.res.responseUrl.split('=')[1];

    console.log('Authorization code:', authorizationCode);

    const accessTokenUrl = 'https://api.instagram.com/oauth/access_token';
    const accessTokenData = {
      client_id: appId,
      client_secret: appSecret,
      grant_type: 'authorization_code',
      code: authorizationCode,
      redirect_uri: redirectUri
    };

    console.log('Access token data:', accessTokenData);

    axios.post(accessTokenUrl, accessTokenData)
      .then(response => {
        console.log('Access token response:', response);

        const accessToken = response.data.access_token;

        console.log('Access token:', accessToken);
      })
      .catch(error => {
        console.error('Error obtaining access token:', error);
      });
  })
  .catch(error => {
    console.error('Error obtaining authorization code:', error);
  });