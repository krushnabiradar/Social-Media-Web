import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import LeftSide from "../../components/LeftSide/LeftSide";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <LeftSide />
      <PostSide />
      <ProfileSide />
    </div>
  );
};

export default Home;
