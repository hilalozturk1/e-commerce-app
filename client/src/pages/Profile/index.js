import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    logout(() => {
      navigate("../");
    });
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
