//firebase utilites
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

import { useEffect, useState } from "react";
import img from "../../Media/vinyl_transparent.png";
import "./Radios.css";

const Radios = () => {
  const [radios, setRadios] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "radios"), (querySnapshot) => {
      const radiosList = [];
      querySnapshot.forEach((doc) => {
        radiosList.push({ ...doc.data(), id: doc.id });

        setRadios(radiosList);
      });
    });
  }, []);
  return (
    <div className='radios-container'>
      {radios.map((radio) => (
        <div className='radios-cart-container' key={radio.id}>
          <img src={img} alt='vinyl-img' />
          <h2>{radio.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Radios;
