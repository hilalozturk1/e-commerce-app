import React from "react";
import { useAuth } from "../../context/AuthContext";

function Profile() {
  const { user } = useAuth();
  console.log(user);
  return <div>{user.role}</div>;
}

export default Profile;
