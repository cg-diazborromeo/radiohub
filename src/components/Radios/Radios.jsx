import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

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
    <div>
      {radios.map((radio) => (
        <div key={radio.id}>
          <h2>{radio.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Radios;
