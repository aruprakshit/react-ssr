import React, {} from "react";

const Home = () => {
  return (
    <div>
      <div>I am in home component</div>
      <button onClick={() => console.log('Hi there!')}>Click ME!</button>
    </div>
  );
};

export default {
  component: Home
};
