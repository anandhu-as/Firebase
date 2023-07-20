import React from "react";
import Auth from "./Components/Auth";
import { auth } from "./Config";

const App = () => {
  return <div>
    <Auth/>
    {auth.currentUser ? auth.currentUser.email:'' }
  </div>;
};

export default App;
