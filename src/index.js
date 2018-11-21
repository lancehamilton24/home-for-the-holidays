import firebase from 'firebase/app';
import 'bootstrap';
import $ from 'jquery';
import showAddForm from '../components/AddEditFriends/addEditFriends';

import apiKeys from '../db/apiKeys.json';

import createNavbar from '../components/Navbar/navbar';
import loginButton from '../components/Auth/auth';

import './index.scss';
import authHelpers from './helpers/authHelpers';
import friendsPage from '../components/FriendsPage/friendsPage';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  authHelpers.checkLoginStatus(friendsPage);
  loginButton();
  $('#show-friend-form').on('click', showAddForm);
};

initializeApp();
