import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import 引用模組功能

//重複呼叫的模組
function LoginPage() {

  const navigate = useNavigate();

  // Email State
  const [email, setEmail] = useState("");

  // Password State
  const [password, setPassword] = useState("");

  // Error Message
  const [error, setError] = useState("");

  // Login Button
  const handleLogin = () => {

    setError("");

    // NUS Email Check
    if (!email.endsWith("@u.nus.edu")) {

      setError("Please use your NUS student email");

      return;
    }

    // Password Check
    if (password.trim() === "") {

      setError("Password is required");

      return;
    }

    // Success
// Mock Login Account
const testEmail = "test@u.nus.edu";

const testPassword = "123456";

// Check Account
if (email !== testEmail || password !== testPassword) {

  setError("Invalid email or password");

  return;
}

console.log("Login Success");

// Save Login State
localStorage.setItem("isLogin", "true");

// Jump
navigate("/profile");
  };

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.title}>
          UniMatch
        </h1>

        <p style={styles.subtitle}>
          NUS Student Login
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="NUS Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {/* Error */}
        {
          error && (
            <p style={styles.error}>
              {error}
            </p>
          )
        }

        {/* Login Button */}
        <button
          onClick={handleLogin}
          style={styles.button}
        >
          Login
        </button>

      </div>

    </div>
  );
}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  },

  card: {
    width: "350px",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)"
  },

  title: {
    textAlign: "center",
    marginBottom: "10px"
  },

  subtitle: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#666"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    boxSizing: "border-box"
  },

  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px"
  },

  error: {
    color: "red",
    marginBottom: "15px"
  }
};

export default LoginPage;