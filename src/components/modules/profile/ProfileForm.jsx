import { styles } from "./profileStyles";

function ProfileForm({

  profile,

  isEditing,

  handleChange

}) {

  return (

    <>

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

    </>
  );
}

export default ProfileForm;