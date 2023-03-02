import React from "react";
import { useRouter } from "next/router";
const username = () => {
  const router = useRouter();
  // console.log("router", router);
  return <div>username {router.query.user}</div>;
};

export default username;
