import React, { useEffect } from "react";
import PageContent from "../components/Layout/PageContent";
import ViewLinks from "../components/ViewLinks/ViewLinks";
import UpdateLinks from "../components/UpdateLinks/UpdateLinks";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../components/commonComponents/Notification";
import { fetchLinks } from "../store/links-action";
import useLocalStorage from "../hooks/useLocalStorage";
import { linksActions } from "../store/links-slice";

const Links = ({ previewLinks, profile }) => {
  const notification = useSelector((state) => state.ui.Notification);
  return (
    <PageContent>
      <>
        <ViewLinks
          links={previewLinks}
          avatar={profile.imgURL}
          username={
            profile.firstName &&
            profile.lastName &&
            profile.firstName + " " + profile.lastName
          }
          email={profile.email}
        />
      </>
      <>
        <UpdateLinks />
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

export default Links;
