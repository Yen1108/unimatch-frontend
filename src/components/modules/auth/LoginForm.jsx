import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSendCode = () => {
    setError("");
    setSuccess("");

    if (!email.endsWith("@u.nus.edu")) {
      setError("Please use your NUS student email");
      return;
    }

    const mockCode = "123456";

    setGeneratedCode(mockCode);

    console.log("Verification Code:", mockCode);

    setSuccess("Verification code sent!");
  };

  const handleLogin = () => {
    setError("");

    if (!email.endsWith("@u.nus.edu")) {
      setError("Please use your NUS student email");
      return;
    }

    if (code.trim() === "") {
      setError("Please enter verification code");
      return;
    }

    if (code !== generatedCode) {
      setError("Invalid verification code");
      return;
    }

    console.log("Login Success");

    localStorage.setItem("isLogin", "true");

    localStorage.setItem(
      "user",
      JSON.stringify({
        email: email
      })
    );

    navigate("/profile");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>UniMatch</h1>

        <p style={styles.subtitle}>NUS Student Login</p>

        <input
          type="email"
          placeholder="NUS Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleSendCode} style={styles.sendButton}>
          Send Verification Code
        </button>

        <input
          type="text"
          placeholder="Verification Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={styles.input}
        />

        {error && <p style={styles.error}>{error}</p>}

        {success && <p style={styles.success}>{success}</p>}

        <button onClick={handleLogin} style={styles.button}>
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

  sendButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#6c63ff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "15px"
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
    marginBottom: "15px",
    textAlign: "center"
  },

  success: {
    color: "green",
    marginBottom: "15px",
    textAlign: "center"
  }
};

export default LoginForm;