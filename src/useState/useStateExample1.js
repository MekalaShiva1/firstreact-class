import { useState } from "react";

export const UseStateExample = () => {
  const [subscribe, setSubscribe] = useState(false);

  const subscribeHandler = () => {
    setSubscribe(!subscribe);
    // setSubscribe(true);
  };

  return (
    <div>
      <button
        onClick={subscribeHandler}
        style={{
          backgroundColor: "pink",
          color: "white",
          height: "50px",
          width: "150px",
        }}
      >
        {subscribe ? "subscribed" : "subscribe"}
      </button>
      <h2>
        {!subscribe ? "please subscribe" : alert("thanks for subscribing")}
      </h2>
    </div>
  );
};
// import { useState } from "react";

// export const UseStateExample = () => {
//   const [subscribe, setSubscribe] = useState(false);

//   const subscribeHandler = () => {
//     setSubscribe((prevSubscribe) => {
//       const newSubscribe = !prevSubscribe;
//       if (newSubscribe) {
//         alert("Thanks for subscribing!");
//       }
//       return newSubscribe;
//     });
//   };

//   return (
//     <div>
//       <button onClick={subscribeHandler}>
//         {subscribe ? "Subscribed" : "Subscribe"}
//       </button>
//       {subscribe ? <h2>Thank you for subscribing!</h2> : <h2>Please subscribe</h2>}
//     </div>
//   );
// };
