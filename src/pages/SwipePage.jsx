import { useState } from "react";
import TinderCard from "react-tinder-card";

import user1 from "../assets/1.jpg";
import user2 from "../assets/2.jpg";
import user3 from "../assets/3.jpg";

function SwipePage() {

const [showMatch, setShowMatch] = useState(false);

  const [matchedUser, setMatchedUser] = useState("");

const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sarah Lim",
      faculty: "Business",
      year: "Year 2",
      bio: "Coffee lover and cafe hopper ☕",
      interests: "Cafe, Music, Travel",
      photo: user1
    },


    {
      id: 2,
      name: "Daniel Tan",
      faculty: "Engineering",
      year: "Year 3",
      bio: "Gym and coding everyday 💪",
      interests: "Gym, Coding, Anime",
      photo: user2
    },



    {
      id: 3,
      name: "Emily Ong",
      faculty: "Law",
      year: "Year 1",
      bio: "Looking for new friends at NUS!",
      interests: "Reading, Movies, Food",
      photo: user3
    }
  ]);

  const onSwipe = (direction, user) => {

    if (direction === "right") {

      console.log("LIKE:", user.name);

      setMatchedUser(user.name);

      setShowMatch(true);

      setTimeout(() => {
        setShowMatch(false);
      }, 2200);

    } else if (direction === "left") {

      console.log("PASS:", user.name);

    }
  };

  const onCardLeftScreen = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>UniMatch Discover</h1>

  
  {showMatch && (
    <div style={styles.matchOverlay}>

      <div style={styles.matchBox}>
        <h1 style={styles.matchTitle}>
          🎉 It's a Match!
        </h1>

        <p style={styles.matchText}>
          You matched with {matchedUser}
        </p>
      </div>

    </div>
  )}

      <div style={styles.cardContainer}>

        {users.map((user) => (

          <TinderCard
            key={user.id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => onSwipe(dir, user)}
            onCardLeftScreen={() => onCardLeftScreen(user.id)}
          >

            <div style={styles.card}>

              <img
                src={user.photo}
                alt={user.name}
                style={styles.photo}
              />

              <h2>{user.name}</h2>

              <p>{user.faculty}</p>

              <p>{user.year}</p>

              <p style={styles.bio}>{user.bio}</p>

              <p style={styles.interests}>
                {user.interests}
              </p>

              <div style={styles.hint}>
                <span>← PASS</span>
                <span>LIKE →</span>
              </div>

            </div>

          </TinderCard>

        ))}

        {users.length === 0 && (
          <h2>No More Profiles</h2>
        )}

      </div>
    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px"
  },

  title: {
    marginBottom: "30px"
  },

  cardContainer: {
    position: "relative",
    width: "400px",
    height: "650px"
  },

  card: {
    position: "absolute",
    width: "100%",
    maxWidth: "400px",
    height: "600px",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "25px",
    boxShadow: "0 0 20px rgba(0,0,0,0.15)",
    textAlign: "center",
    userSelect: "none",
    boxSizing: "border-box"
  },

  photo: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "16px",
    marginBottom: "20px"
  },

  bio: {
    marginTop: "20px",
    color: "#555"
  },

  interests: {
    marginTop: "15px",
    color: "#888"
  },

  hint: {
    marginTop: "35px",
    display: "flex",
    justifyContent: "space-between",
    color: "#999",
    fontWeight: "bold"
  },



matchOverlay: {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.55)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999
},

matchBox: {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "24px",
  textAlign: "center",
  boxShadow: "0 0 30px rgba(0,0,0,0.25)",
  animation: "pop 0.4s ease"
},

matchTitle: {
  fontSize: "42px",
  color: "#ff4d6d",
  marginBottom: "10px"
},

matchText: {
  fontSize: "20px",
  color: "#444"
}
};

export default SwipePage;