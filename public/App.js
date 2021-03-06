import React, { useState } from "react";
import AppRouter from "components/Router";
import fbase from "fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] =useState(fbase.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  );
}

export default App;
