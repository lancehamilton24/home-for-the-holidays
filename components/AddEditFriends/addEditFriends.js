import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';

const formBuilder = () => {
  const form = `
  <div class="form-group">
    <label for="form-friend-name">Name:</label>
    <input type="text" class="form-control" id="form-friend-name" placeholder="John Smith">
  </div>
  <div class="form-group">
    <label for="form-friend-address">Address:</label>
    <input type="text" class="form-control" id="form-friend-address" placeholder="500 Interstate Blvd">
  </div>
  <div class="form-group">
    <label for="form-friend-email">Email:</label>
    <input type="text" class="form-control" id="form-friend-email" placeholder="Jsmith@gmail.com">
  </div>
  <div class="form-group">
    <label for="form-friend-phone">Phone number:</label>
    <input type="text" class="form-control" id="form-friend-phone" placeholder="809-989-9890">
  </div>
  <div class="form-group">
    <label for="form-friend-relationship">Relationship:</label>
    <input type="text" class="form-control" id="form-friend-relationship" placeholder="I don't know you">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  `
  return form;
};

const getFormValues = () => {
  const friend = {
    name: $('#form-friend-name').val(),
    address: $('#form-friend-address').val(),
    email: $('#form-friend-email').val(),
    relationship: 4('#form-friend-relationship').val(),
    phoneNumber: $('#form-friend-phone').val(),
    isAvoiding: false,
    uid: authHelpers.getCurrentUid(),
  }
}