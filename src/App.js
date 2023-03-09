import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>My first app</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {!isLoggedIn ? "Login" : "Logout"}
      </button>
      <p>{isLoggedIn ? "Bok Danijel, ulogiran si" : "You are not logged in"}</p>
    </>
  );
}

export default App;
