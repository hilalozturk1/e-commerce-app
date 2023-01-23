import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../context/AuthContext";

function Profile() {
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    logout();
  };
  return (
    <div>
      <Text fontSize="22">Profile Page</Text>
      {JSON.stringify(user)}
      <br />
      <br />
      <br />
      <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
}

export default Profile;
