import { useState } from "react";
import { useNavigate } from "react-router-dom";
import currentUser from "../data/currentUser";
import ProfileAvatar from "../components/modules/profile/ProfileAvatar";
import ProfileForm from "../components/modules/profile/ProfileForm";
import ProfileButtons from "../components/modules/profile/ProfileButtons";

function ProfilePage() {

  const navigate = useNavigate();

  // Avatar State
  const [avatar, setAvatar] = useState(
    localStorage.getItem("avatar") ||
    currentUser.avatar
  );

  // Edit Mode
  const [isEditing, setIsEditing] = useState(false);

  // Profile State
  const [profile, setProfile] = useState(

  JSON.parse(localStorage.getItem("profile")) ||

  currentUser
);

  // Input Change
  const handleChange = (e) => {

    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value
    });
  };

  // Avatar Upload
  const handleAvatarUpload = (e) => {

  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {

    const base64String = reader.result;

    setAvatar(base64String);

    localStorage.setItem("avatar", base64String);
  };

  reader.readAsDataURL(file);
};

  // Save Button
const handleSave = () => {

  console.log(profile);

  // 存入 localStorage
  localStorage.setItem(
    "profile",
    JSON.stringify(profile)
  );

  setIsEditing(false);

  navigate("/swipe");
};

  // Logout Button
  const handleLogout = () => {

    localStorage.removeItem("isLogin");

localStorage.removeItem("profile");

localStorage.removeItem("avatar");

    navigate("/");
  };

  return (

    <div>

      <ProfileAvatar
        avatar={avatar}
        onUpload={handleAvatarUpload}
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