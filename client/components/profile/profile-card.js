import React from 'react';
import { connect } from 'react-redux';

const ProfileCard = ({ viewedUser }) => {
  const {
    firstName,
    lastName,
    isActive,
    location,
    description,
    imageUrl
  } = viewedUser;
  let busyIndicator = isActive ? '✅' : '⛔';

  return (
    <div style={{ width: 400 }}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={imageUrl} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">
            {busyIndicator} {firstName} {lastName}
          </p>
          <p className="subtitle is-6">{location ? location : ''}</p>
          <p>{description ? description : ''}</p>
        </div>
      </div>
    </div>
  );
};

const mapState = state => ({
  viewedUser: state.users.active
});

export default connect(mapState)(ProfileCard);
