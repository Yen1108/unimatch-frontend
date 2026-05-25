import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {

    const navigate = useNavigate();

  // Edit Mode
  const [isEditing, setIsEditing] = useState(false);

  // Profile Data
  const [profile, setProfile] = useState({

    displayName: "John Tan",

    faculty: "School of Computing",

    year: "Year 1",

    bio: "I enjoy coding, coffee, and meeting new people at NUS.",

    interests: "Coding, Music, Gym, Anime"
  });

  // Handle Input Change
  const handleChange = (e) => {

    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value
    });
  };

  // Save Profile
  const handleSave = () => {

    console.log("Profile Saved");

    console.log(profile);

    setIsEditing(false);

      navigate("/swipe");
  };

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        {/* Avatar */}
        <div style={styles.avatarSection}>

          <div style={styles.avatar}>
            JT
          </div>

          <button style={styles.uploadButton}>
            Upload Photo
          </button>

        </div>

        {/* Title */}
        <h1 style={styles.title}>
          My Profile
        </h1>

        {/* Display Name */}
        <label style={styles.label}>
          Display Name
        </label>

        <input
          type="text"
          name="displayName"
          value={profile.displayName}
          onChange={handleChange}
          style={styles.input}
          readOnly={!isEditing}
        />

        {/* Faculty */}
        <label style={styles.label}>
          Faculty
        </label>

        <input
          type="text"
          name="faculty"
          value={profile.faculty}
          onChange={handleChange}
          style={styles.input}
          readOnly={!isEditing}
        />

        {/* Year */}
        <label style={styles.label}>
          Year of Study
        </label>

        <input
          type="text"
          name="year"
          value={profile.year}
          onChange={handleChange}
          style={styles.input}
          readOnly={!isEditing}
        />

        {/* Bio */}
        <label style={styles.label}>
          Bio
        </label>

        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          style={styles.textarea}
          readOnly={!isEditing}
        />

        {/* Interests */}
        <label style={styles.label}>
          Interests
        </label>

        <textarea
          name="interests"
          value={profile.interests}
          onChange={handleChange}
          style={styles.textarea}
          readOnly={!isEditing}
        />

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

        {/* Save Button */}
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

      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px"
  },

  card: {
    width: "450px",
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "40px",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)"
  },

  avatarSection: {
    textAlign: "center",
    marginBottom: "30px"
  },

  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#ff4d6d",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "32px",
    margin: "0 auto 15px auto"
  },

  uploadButton: {
    padding: "8px 16px",
    border: "none",
    backgroundColor: "#eee",
    borderRadius: "6px",
    cursor: "pointer"
  },

  title: {
    textAlign: "center",
    marginBottom: "30px"
  },

  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxSizing: "border-box"
  },

  textarea: {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minHeight: "80px",
    resize: "none",
    boxSizing: "border-box"
  },

  editButton: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    backgroundColor: "#444",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px"
  },

  saveButton: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default ProfilePage;