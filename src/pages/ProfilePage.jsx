import { useState } from "react";
import { useNavigate } from "react-router-dom";

import currentUser from "../data/currentUser";

import ProfileAvatar from "../components/modules/profile/ProfileAvatar";
import ProfileForm from "../components/modules/profile/ProfileForm";
import ProfileButtons from "../components/modules/profile/ProfileButtons";

function ProfilePage() {

  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState(currentUser);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSave = () => {

    console.log(profile);

    setIsEditing(false);

    navigate("/swipe");
  };

  const handleLogout = () => {

    localStorage.removeItem("isLogin");

    navigate("/");
  };

  return (

    <div>

      <ProfileAvatar
        avatar={profile.avatar}
      />

      <ProfileForm
        profile={profile}
        isEditing={isEditing}
        handleChange={handleChange}
      />

      <ProfileButtons
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleSave={handleSave}
        handleLogout={handleLogout}
      />

    </div>
  );
}

export default ProfilePage;