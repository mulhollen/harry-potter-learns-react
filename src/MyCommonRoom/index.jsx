import React, { useContext } from "react";
import { HogwartsContext } from "../HogwartsContext/";
import { Link } from "react-router-dom";

const MyCommonRoom = () => {
  const {hogwartsData} = useContext(HogwartsContext);

  return (
    <main className={`commonroom ${hogwartsData.house}`}>
      <h1>{hogwartsData.name}'s {hogwartsData.house} Common Room</h1>
      <Link to="/">Want to try again?</Link>
    </main>
  );
};

export default MyCommonRoom;
