import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  // Fetch user details from API and store in state

  return (
    <div>
      <h2>Profile</h2>
      {/* Display user details like age, dob, contact, etc. */}
      <Link to="/edit-profile">Edit Profile</Link>
    </div>
  );
};

export default ProfilePage;
