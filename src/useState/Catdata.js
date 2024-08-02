import axios from "axios";
import { useEffect, useState } from "react";

export const Catdata = () => {
  const [cat, setCat] = useState(0);

  const fetchdata = async () => {
    const responce = await axios.get(
      "https://api.thecatapi.com/v1/images/search?breed_id=abys"
    );
    const result = responce.data[0];
    //  for(let i=0;i<responce.length;i++){}
    // console.log("result", responce);
    setCat(result);
  };

  const chnageImage = () => {
    fetchdata();
  };

  useEffect(() => {
    fetchdata();
  }, []); 

  console.log("cat",cat);

  return (
    <>
      <img src={cat.url} height={300} width={300}></img>
      <button onClick={chnageImage}>next</button>
    </>
  );
};
