import React, { useEffect, useState } from "react";
import Link from "next/link";
const index = () => {
  const [users, setusers] = useState([]);
  // console.log("users", users);
  useEffect(() => {
    async function fetchdata() {
      const data = await fetch("https://dummyjson.com/users");
      setusers(await data.json());
    }
    fetchdata();
  }, []);
  if (!users) {
    return <h5>loading........</h5>;
  }
  return (
    <div>
      <h1> client side rendring</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {users &&
          users.users &&
          users?.users?.map((item, i) => {
            return (
              <Link
                href={`/usersdata/${item.id}`}
                key={i}
                style={{
                  width: "30%",
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                <li>firstName:- {item?.firstName}</li>
                <li>lastName:- {item?.lastName}</li>
                <li>birthDate:- {item?.birthDate}</li>
                <li>email:- {item?.email}</li>
                <li>gender:- {item?.gender}</li>
                <li>eyeColor:- {item?.eyeColor}</li>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default index;
