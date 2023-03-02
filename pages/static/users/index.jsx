import React from "react";
import Link from "next/link"
const index = (props) => {
  // console.log('props', props.data.users);
  if (!props.data) {
    return <h5>loading........</h5>;
  }
  return (
    <div>
      <h1>Static  side </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {props.data &&
          props.data.users &&
          props.data.users?.map((item, i) => {
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
  )
};
export const getStaticProps = async () => {
//   console.log("this is server side rendring");
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      name: "tausif",
      data,
    },
  };
};
export default index;
