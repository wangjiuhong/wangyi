import React from "react";
import routes  from "./router";
import { useRoutes } from "react-router-dom";
const App = ()=> {
  return (
    <div>
      {useRoutes(routes)}
    </div>
  );
}

export default App;
