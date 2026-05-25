function ProfileAvatar({ avatar }) {

  return (

    <div>
      <img
        src={avatar}
        alt="avatar"
      />

      <button>
        Upload Photo
      </button>
    </div>
  );
}

export default ProfileAvatar;