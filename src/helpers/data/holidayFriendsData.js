import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getHolidayIdsForFriend = friendId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/holidayFriends.json?orderBy="friendId"&equalTo="${friendId}"`)
    .then((results) => {
      console.log(results);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getHolidayIdsForFriend };
