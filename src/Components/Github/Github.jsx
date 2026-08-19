import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Yograjjsinh")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github followers:{data.followers}{" "}
      <img
        src={data.avatar_url}
        alt="Git picture"
        width={300}
        className="w-32 h-32 rounded-full mx-auto mt-4 object-cover"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Yograjjsinh");
  return response.json();
};
