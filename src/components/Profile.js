import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  const avatar = props.avatar === '' ? props.defaultAvatar : props.avatar;
  return (
    <div className="profile">
      <div
        className="profile__avatar"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

// Profile.propTypes = {
//   avatar: PropTypes.string.isRequired,
// };

export default Profile;