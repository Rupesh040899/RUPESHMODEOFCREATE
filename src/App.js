import { useEffect, useState } from "react";
import "./styles.css";
import NextPage from "./nexxtPage";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    e.preventDefault();

    if (userName === "user" && password === "password") {
      setError("");
      setValue(true);
    } else {
      setError("Invalid username or password");
      setValue(false);
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {!value ? (
        <form action="" onSubmit={handleChange}>
          {error && <p>{error}</p>}
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <label htmlFor="">Password: </label>
          <input
            type="text"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <br />
          <button>Submit</button>
        </form>
      ) : (
        <NextPage />
      )}
    </div>
  );
}
