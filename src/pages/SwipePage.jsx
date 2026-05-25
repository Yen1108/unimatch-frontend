import { useState } from "react";
import TinderCard from "react-tinder-card";

function SwipePage() {

  // Mock Users
  const [users, setUsers] = useState([

    {
      id: 1,
      name: "Sarah Lim",
      faculty: "Business",
      year: "Year 2",
      bio: "Coffee lover and cafe hopper ☕",
      interests: "Cafe, Music, Travel"
    },

    {
      id: 2,
      name: "Daniel Tan",
      faculty: "Engineering",
      year: "Year 3",
      bio: "Gym and coding everyday 💪",
      interests: "Gym, Coding, Anime"
    },

    {
      id: 3,
      name: "Emily Ong",
      faculty: "Law",
      year: "Year 1",
      bio: "Looking for new friends at NUS!",
      interests: "Reading, Movies, Food"
    }
  ]);

  // Swipe Action
  const onSwipe = (direction, user) => {

    if (direction === "right") {

      console.log("LIKE:", user.name);

    } else if (direction === "left") {

      console.log("PASS:", user.name);
    }
  };

  // Card Left Screen
  const onCardLeftScreen = (id) => {

    setUsers((prev) =>
      prev.filter((user) => user.id !== id)
    );
  };

  return (

    <div style={styles.container}>

      <h1 style={styles.title}>
        UniMatch Discover
      </h1>

      <div style={styles.cardContainer}>

        {
          users.map((user) => (

            <TinderCard
              key={user.id}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => onSwipe(dir, user)}
              onCardLeftScreen={() => onCardLeftScreen(user.id)}
            >

              <div style={styles.card}>

                {/* Avatar */}
                <div style={styles.avatar}>
                  {user.name.charAt(0)}
                </div>

                <h2>
                  {user.name}
                </h2>

                <p>
                  {user.faculty}
                </p>

                <p>
                  {user.year}
                </p>

                <p style={styles.bio}>
                  {user.bio}
                </p>

                <p style={styles.interests}>
                  {user.interests}
                </p>

                {/* Hint */}
                <div style={styles.hint}>

                  <span>
                    ← PASS
                  </span>

                  <span>
                    LIKE →
                  </span>

                </div>

              </div>

            </TinderCard>
          ))
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
    height: "600px"
  },

  card: {
    position: "absolute",
    width: "100%",
    maxWidth: "400px",
    height: "550px",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 0 20px rgba(0,0,0,0.15)",
    textAlign: "center",
    userSelect: "none"
  },

  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#ff4d6d",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "42px",
    margin: "0 auto 20px auto"
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
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-between",
    color: "#999",
    fontWeight: "bold"
  }
};

export default SwipePage;