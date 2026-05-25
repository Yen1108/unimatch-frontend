import { useNavigate } from "react-router-dom";

import { styles } from "./profileStyles";

function ProfileButtons({

  isEditing,

  setIsEditing,

  handleSave,

  handleLogout

}) {

  const navigate = useNavigate();

  return (

    <>

      {/* Edit Button */}
      <button
        style={styles.editButton}
        onClick={() => setIsEditing(!isEditing)}
      >
        {
          isEditing
            ? "Cancel Edit"
            : "Edit Profile"
        }
      </button>

      {/* Start Discovering */}
      {
        !isEditing && (
          <button
            style={styles.discoverButton}
            onClick={() => navigate("/swipe")}
          >
            Start Discovering
          </button>
        )
      }

      {/* Save */}
      {
        isEditing && (
          <button
            style={styles.saveButton}
            onClick={handleSave}
          >
            Save Profile & Start Discovering
          </button>
        )
      }

      {/* Logout */}
      <button
        style={styles.logoutButton}
        onClick={handleLogout}
      >
        Logout
      </button>

    </>
  );
}

export default ProfileButtons;