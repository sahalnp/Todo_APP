import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useUser} from "../hooks/Context"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const Auth = () => {
  const {user,setUser}=useUser()
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user);
    if (user) {
      localStorage.setItem("auth", "true");
    } else {
      localStorage.removeItem("auth");
    }
  });
  return () => unsubscribe();
}, [setUser]);


  return null; 
};
export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useUser()
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [setUser]);

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    await signInWithEmailAndPassword(auth, email, password);
    
  } catch (error) {
    if (error.code === "auth/invalid-credential") {
      alert("❌ No user found with this email.");
    } else if (error.code === "auth/wrong-password") {
      alert("❌ Incorrect password.");
    } else if (error.code === "auth/invalid-email") {
      alert("❌ Invalid email format.");
    } else {
      alert("❌ Login failed: " + error.message);
    }
  } finally {
    setLoading(false);
  }
};



    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2 className="login-title">Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="login-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                />

                <button
                    type="submit"
                    className="login-button"
                    disabled={loading}
                >
                    {loading ? "Signing In..." : "Login"}
                </button>

                <p className="login-footer">
                    Don't have an account?{" "}
                    <span
                        style={{ cursor: "pointer", color: "blue" }}
                        onClick={() => navigate("/signup")}
                    >
                        Sign Up
                    </span>
                </p>
            </form>
        </div>
    );
};
