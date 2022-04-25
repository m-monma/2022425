import React from "react";
import BusinessTop from "./Components/Pages/BusinessTop";
import AchievementTitle from "./Components/Pages/AchievementTitle";
import ShowMore from "./Components/ShowMore";
import gradItem from "./Components/gradItem";

const App = () => {
  return (
    <>
      <div clssName="App">
        <BusinessTop />
        <AchievementTitle />
        <ShowMore />
        <gradItem />
      </div>
    </>
  );
};

export default App;
