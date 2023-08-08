import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SectionTitle from "../commonComponents/SectionTitle";
import SaveButton from "../commonComponents/SaveButton";
import ImageSection from "./ImageSection";
import UserInfoItem from "./UserInfoItem";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import useLocalStorage from "../../hooks/useLocalStorage";
import { profileActions } from "../../store/profile-slice";

const UpdateProfile = ({ profile }) => {
  const [imageDimensions, setImageDimensions] = useState({});
  const dispatch = useDispatch();

  const [error, setError] = useState({});
  const [previewProfile, setPreviewProfile] = useLocalStorage(
    "previewProfile",
    {}
  );
  const [userForm, setUserForm] = useState({
    firstName: previewProfile.firstName || "",
    lastName: previewProfile.lastName || "",
    email: previewProfile.email || "",
  });
  const [selectedFile, setSelectedFile] = useState(previewProfile.imgURL);
  
  const onSelectFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (readerEvent) => {
      if (readerEvent.target?.result) {
        setSelectedFile(readerEvent.target.result);
      }
    };
  };
  const onSelectImage = (event) => {
    if (event.target.files?.[0]) {
      onSelectFile(event.target.files[0]);
    }
  };
  const getImageDimensions = (imgURL) => {
    const img = new Image();
    img.src = imgURL;
    img.onload = () => {
      setImageDimensions({
        height: img.height,
        width: img.width,
      });
    };
  };
  const onInputChange = (event) => {
    setUserForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const saveUserDetails = () => {
    if (error) setError({});
    validateImageDimensions(imageDimensions);
    setError(validateValues(userForm));
   
  };
  const validateValues = (inputValues) => {
    let errors = {};
    if (!inputValues.email || !inputValues.email.includes("@")) {
      errors.email = "Please enter a valid email";
    }
    if (!inputValues.firstName) {
      errors.firstName = "field is required!";
    }
    if (!inputValues.lastName) {
      errors.lastName = "field is required!";
    }
    return errors;
  };
  const validateImageDimensions = (dimensions) => {
    if (dimensions.height > 1024 || dimensions.width > 1024) {
      dispatch(
        uiActions.showNotification({
          type: "error",
          open: true,
          message: "Please choose image with right dimensions",
        })
      );
      setSelectedFile(null);
    }
  };
  useEffect(() => {
    getImageDimensions(selectedFile);
  }, [selectedFile]);
  useEffect(() => {
    let userProfile = {
      imgURL: selectedFile,
      firstName: userForm.firstName,
      lastName: userForm.lastName,
      email: userForm.email,
    };
     if (Object.keys(error).length === 0) {
       dispatch(profileActions.updateProfileDetails(userProfile));
       setPreviewProfile(userProfile);
     }
  }, [error]);

  return (
    <Flex
      width="100%"
      flexDirection="column"
      height={{ base: "100%", md: "790px" }}
      bg="white"
      borderRadius="7px"
    >
      <Flex
        width="100%"
        minHeight="700px"
        bg="white"
        flexDirection="column"
        borderRadius="7px"
        padding={{ base: "30px 15px", lg: "40px 30px 10px" }}
        position="relative"
      >
        <SectionTitle
          title="Profile Details"
          subTitle="Add your details to create a personal touch to your profile."
        />
        <ImageSection
          onSelectImage={onSelectImage}
          selectedImage={selectedFile}
        />
        <Flex
          flexDirection="column"
          bg="secondary.100"
          borderRadius="7px"
          padding="20px"
          width="100%"
          alignItems="center"
          gap="15px"
        >
          <UserInfoItem
            infoName="First name*"
            placeHolder="e.g samah"
            type="text"
            onInputChange={onInputChange}
            name="firstName"
            value={userForm.firstName}
            error={error.firstName && error.firstName}
          />
          <UserInfoItem
            infoName="Last name*"
            placeHolder="e.g abu laymun"
            type="text"
            onInputChange={onInputChange}
            name="lastName"
            value={userForm.lastName}
            error={error.lastName && error.lastName}
          />
          <UserInfoItem
            infoName="Email*"
            placeHolder="sam@hotmail.com"
            type="email"
            onInputChange={onInputChange}
            name="email"
            value={userForm.email}
            error={error.email && error.email}
          />
        </Flex>
      </Flex>
      <SaveButton label="Save" handleClick={saveUserDetails} />
    </Flex>
  );
};

export default UpdateProfile;
