import React from 'react'
import PageContent from '../components/Layout/PageContent';
import ViewLinks from '../components/ViewLinks/ViewLinks';
import Notification from '../components/commonComponents/Notification';
import { useDispatch, useSelector } from 'react-redux';
import UpdateProfile from '../components/UpdateProfile/UpdateProfile';

const Profile = ({ previewLinks ,profile }) => {
  const notification = useSelector((state) => state.ui.Notification);
  //const profile = useSelector((state) => state.profile.profileDetails);
  //const dispatch = useDispatch();

  return (
    <PageContent>
      <>
        <ViewLinks
          links={previewLinks}
          avatar={profile.imgURL}
          username={
            profile.firstName && profile.lastName&& profile.firstName + " " + profile.lastName
          }
          email={profile.email}
        />
      </>
      <>
        <UpdateProfile profile={profile} />
        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
          ></Notification>
        )}
      </>
    </PageContent>
  );
};

export default Profile
