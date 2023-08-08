import React from 'react'
import PreviewHeader from '../components/PreviewPage/PreviewHeader'
import ViewLinks from '../components/ViewLinks/ViewLinks';
import { Box } from '@chakra-ui/react';
import ViewLinksLogo from '../components/ViewLinks/ViewLinksLogo';
import PreviewCard from '../components/PreviewPage/PreviewCard';

const Preview = ({ previewLinks, profile }) => {
  return (
    <Box
      backgroundColor={{ base: "secondary.100", md: "brand.100" }}
      width="100%"
      height="357px"
      borderBottomLeftRadius="32px"
      borderBottomRightRadius="32px"
      padding={{ base: 0, md: "30px" }}
      position="relative"
    >
      <PreviewHeader />
      <Box marginTop="70px" width="100%" display="flex" justifyContent="center" padding="20px">
        <PreviewCard
          links={previewLinks}
          avatar={profile.imgURL}
          username={profile.firstName + " " + profile.lastName}
          email={profile.email}

        />
      </Box>
    </Box>
  );
};

export default Preview
