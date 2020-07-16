import React, { useContext, useState } from "react";
import { HogwartsContext } from "../HogwartsContext/";
import { Link } from "react-router-dom";
// need something to push

const SortingHat = () => {
  const { setName } = useContext(HogwartsContext);
  const [readyToBeSorted, setReadyToBeSorted] = useState(false);

  const handleEnter = e => {  
    if (e.key === "Enter") {
      setName(e.target.value)
      setReadyToBeSorted(true);
    }
  };

  return (
    <main className="letterhead">
      <div>
        {!readyToBeSorted && 
          <>
            <h1>hello witch/wizard</h1>
            <label htmlFor="witch wizard name">
              What is your name?
              <input
                id="name"
                type="text"
                className="form-control"
                onKeyDown={handleEnter}
              />
            </label>
          </>
        }
        {readyToBeSorted && 
          <Link to="/common-room">
            Are you ready to be sorted?
          </Link>
        }
      </div>
    </main>
  );
};

export default SortingHat;
