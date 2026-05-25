function InterestTags({
  interests,
  setProfile,
  profile
}) {

  const removeTag = (tag) => {
    setProfile({
      ...profile,
      interests: interests.filter(
        item => item !== tag
      )
    });
  };

  return (
    <div>
      {interests.map((tag) => (
        <button
          key={tag}
          onClick={() => removeTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}