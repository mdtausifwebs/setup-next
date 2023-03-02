import React, { useEffect } from "react";
import { useRouter } from "next/router";
const useUser = () => ({ user: { name: "tausif" }, loading: false });
const index = () => {
  const router = useRouter();
  // console.log("router", router);
  const user = useUser();
  useEffect(() => {
    if (user.user == null) {
      router.replace("/");
    }
  }, [router, user]);
  return (
    <div>
      <div>user index {router.query.user}</div>
      <button
        onClick={(e) => router.push(`/users/${router.query.user}/username`)}
      >
        first method go username
      </button>
      <button
        onClick={(e) =>
          router.push({
            pathname: "/users/[user]/username",
            query: { user: router.query.user },
          })
        }
      >
        second method go username
      </button>
      <button onClick={(e) => router.push("/")}> first method home</button>
      <button onClick={(e) => router.replace("/")}> second method home</button>
      <button onClick={(e) => router.reload()}>reload</button>
    </div>
  );
};

export default index;
