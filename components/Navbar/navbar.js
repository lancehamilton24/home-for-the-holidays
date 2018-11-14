import $ from 'jquery';
import 'bootstrap';
import './navbar.scss';

const createNavbar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Home for the Holidays</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li>
        <a id="navbar-button" class="nav-link" href="#">Authentication</a>
      </li>
      <li>
      </li>
      <li>
        <a id="navbar-button" class="nav-link" href="#">Holidays</a>
      </li>
      <li>
        <a id="navbar-button" class="nav-link" href="#">Friends</a>
      </li>
      <li>
        <a id="navbar-button" class="nav-link" href="#">Logout</a>
      </li>
    </ul>
  </div>`;
  $('#navbar').html(domString);
};

export default createNavbar;
