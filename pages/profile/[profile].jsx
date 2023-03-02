import React from "react";
import { useRouter } from "next/router";
const profile = () => {
  const { query } = useRouter();
  
  return <div>dynamic route this is a {query.profile} profile</div>;
};

export default profile;
