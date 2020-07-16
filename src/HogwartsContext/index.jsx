import React, { useState, useEffect} from "react";
import { useContext } from "react";
const axios = require('axios').default;


const HogwartsContext = React.createContext();
const { Provider, Consumer } = HogwartsContext;

const HogwartsProvider = props => {
  const { children } = props;
  const defaultHogwarts = {
    house: "slytherin",
    name: "lindsay"
  };
  const [hogwartsData, setHogwartsData] = useState(defaultHogwarts);
  
  const setName = (name) => {
    setHogwartsData({
      house: hogwartsData.house,
      name: name
    });
  };

  const getHouse = () => {
    axios.get('https://www.potterapi.com/v1/sortingHat')
      .then(function (response) {
        setHogwartsData({
          house: response.data,
          name: hogwartsData.name
        });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() => {
    getHouse();
  }, []);

  useEffect(() => {
    console.log(hogwartsData);
  })

  return (
    <Provider
      value={{
        hogwartsData, 
        setName
      }}
    >
        {children}
    </Provider>
  );
};


export { HogwartsProvider, Consumer as HogwartsConsumer, HogwartsContext };



