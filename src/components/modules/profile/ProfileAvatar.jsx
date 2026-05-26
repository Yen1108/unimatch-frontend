function ProfileAvatar({ avatar, onUpload }) {

  return (

    <div style={styles.container}>

      <img
        src={avatar}
        alt="avatar"
        style={styles.avatar}
      />

      <label style={styles.uploadButton}>

        Upload Photo

        <input
          type="file"
          accept="image/*"
          onChange={onUpload}
          style={{ display: "none" }}
        />

      </label>

    </div>
  );
}

const styles = {

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid white",
    marginBottom: 15
  },

  uploadButton: {
    padding: "10px 20px",
    borderRadius: 10,
    border: "none",
    backgroundColor: "#ff4d6d",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default ProfileAvatar;