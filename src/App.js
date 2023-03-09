import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./components/Clock/Clock";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Card
        name="Danijel"
        surname="Hrgić"
        cardNumber={25656354565156}
        cvc={552}
        isErste={true}
      ></Card>
    </>
  );
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [date, setDate] = useState(new Date());
  // useEffect(() => {
  //   console.log("Učitao sam se");
  // }, [isLoggedIn]);
  // useEffect(() => {
  //   const interval = setInterval(() => setDate(new Date()), 1000);
  //   return () => clearInterval(interval);
  // }, []);
  // return (
  //   <>
  //     <h1>My first app</h1>
  //     <button
  //       onClick={() => {
  //         setIsLoggedIn(!isLoggedIn);
  //       }}
  //     >
  //       {!isLoggedIn ? "Login" : "Logout"}
  //     </button>
  //     <p>It is {date.toLocaleTimeString()}</p>
  //     <p>{isLoggedIn ? "Bok Danijel, ulogiran si" : "You are not logged in"}</p>
  //   </>
  // );
}

export default App;
