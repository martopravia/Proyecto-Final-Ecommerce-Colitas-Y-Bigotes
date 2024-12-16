import React from "react";

const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center mt-4 fs-1">
          <div className="col">Profile</div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col-3">
            <img
              src="https://picsum.photos/id/40/50/50"
              className="img-thumbnail"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
