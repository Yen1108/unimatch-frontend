export const styles = {

  container: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  },

  card: {
    width: "300px",
    backgroundColor: "white",
    borderRadius: "22px",
    padding: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
  },

  avatarSection: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "18px"
  },

  avatarWrapper: {
    position: "relative",
    width: "52px",
    height: "52px",
    margin: "0 auto 10px"
  },

  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid white",
    boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
    cursor: "pointer"
  },

  fileInput: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer"
  },

  title: {
    textAlign: "center",
    marginBottom: "18px",
    fontSize: "20px",
    fontWeight: "700",
    color: "#333"
  },

  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "600",
    color: "#555",
    fontSize: "12px"
  },

  input: {
    width: "100%",
    padding: "10px 12px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #e2e2e2",
    boxSizing: "border-box",
    fontSize: "13px",
    outline: "none"
  },

  textarea: {
    width: "100%",
    padding: "10px 12px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid #e2e2e2",
    minHeight: "70px",
    resize: "none",
    boxSizing: "border-box",
    fontSize: "13px",
    outline: "none"
  },

  editButton: {
    width: "100%",
    padding: "11px",
    marginBottom: "10px",
    backgroundColor: "#444",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600"
  },

  discoverButton: {
    width: "100%",
    padding: "11px",
    marginBottom: "10px",
    backgroundColor: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600"
  },

  saveButton: {
    width: "100%",
    padding: "11px",
    backgroundColor: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer"
  },

  logoutButton: {
    width: "100%",
    padding: "11px",
    marginTop: "10px",
    backgroundColor: "#fff",
    color: "#ff4d6d",
    border: "1.5px solid #ff4d6d",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600"
  }

};