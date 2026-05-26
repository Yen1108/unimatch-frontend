import { useState } from "react";
import TinderCard from "react-tinder-card";

import user1 from "../assets/1.jpg";

import user2 from "../assets/2.jpg";
import user3 from "../assets/3.jpg";

function SwipePage() {
  
  const [lastRemoved, setLastRemoved] = useState(null);

const [showSuperLike, setShowSuperLike] = useState(false);

const [showMatch, setShowMatch] = useState(false);

  const [matchedUser, setMatchedUser] = useState("");

  const [filter, setFilter] = useState("All");

const handleUndo = () => {

  if (lastRemoved) {

    setUsers((prev) => [
      lastRemoved,
      ...prev
    ]);

  }
};

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

    } 
    
    else if (direction === "left") {

      console.log("PASS:", user.name);

    }

    else if (direction === "up") {

  setShowSuperLike(true);

setTimeout(() => {

  setShowSuperLike(false);

}, 1500);

}

  };

  const onCardLeftScreen = (id) => {

  const removedUser = users.find(
    (user) => user.id === id
  );

  setLastRemoved(removedUser);


    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (




    
    <div style={styles.container}>
          <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      style={styles.filter}
    >
      <option>All</option>
      <option>Business</option>
      <option>Engineering</option>
      <option>Law</option>
    </select>

    {
      showSuperLike && (
        <div style={styles.superLikeEffect}>
          ★ SUPER LIKE ★
        </div>
      )
    }


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

  {users
    .filter((user) => {

      if (filter === "All") return true;

      return user.faculty === filter;

    })
    .map((user) => (

          <TinderCard
            key={user.id}
            preventSwipe={["down"]}
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

      <button
  onClick={handleUndo}
  style={styles.undoButton}
>
  Undo
</button>
    </div>
  );
}

const styles = {

  superLikeEffect: {

  position: "fixed",

  top: "50%",

  left: "50%",

  transform: "translate(-50%, -50%) scale(1)",

  backgroundColor: "#FFD700",

  color: "#fff",

  padding: "20px 40px",

  borderRadius: "20px",

  fontSize: "32px",

  fontWeight: "bold",

  zIndex: 9999,

  boxShadow: "0 0 40px rgba(255,215,0,0.9)",

  animation: "superLikePop 1.5s ease"
},

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
},


undoButton: {
  marginTop: "30px",
  padding: "12px 24px",
  border: "none",
  borderRadius: "10px",
  backgroundColor: "#444",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
  zIndex: 9999
},
  filter: {
    width: "220px",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    marginBottom: "25px",
    fontSize: "16px",
    outline: "none"
  },
};

export default SwipePage;