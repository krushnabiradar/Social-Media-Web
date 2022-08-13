import React, { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "../../img/comment.png";
import Home from "../../img/home.png";
import FollowersCard from "../FollowersCard/FollowersCard";
import ShareModal from "../ShareModal/ShareModal";
import "./LeftSide.css";
const LeftSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="LeftSide">
      {/* Side Navbar */}
      <div className="navIcons">
        <Link to="../home">
          <img src={Home} alt="" />
        </Link>
        <Link to="../chat">
          <img src={Comment} alt="" />
        </Link>
      </div>
      <FollowersCard />

      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default LeftSide;
