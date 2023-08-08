import { Alert, AlertIcon, Box, CloseButton } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const Notification = ({type,message}) => {
const notification = useSelector((state) => state.ui.Notification);
const dispatch = useDispatch();
const handleOnClose = () => {
  dispatch(uiActions.showNotification({ open: false }));
};
  return (
    <>
      {notification.open && (
        <Alert status={type} display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <AlertIcon />
            {message}
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={handleOnClose}
          />
        </Alert>
      )}
    </>
  );
}

export default Notification
