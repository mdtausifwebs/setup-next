import React from "react";

const Index = (props) => {
  // console.log("props", props);
  if (!props.data) {
    return <h5>loading........</h5>;
  }
  return (
    <div>
      {props &&
        props.data &&
        props.data.users.map((user, i) => {
          return <div key={i}>firstName:-  {user.firstName}</div>;
        })}
    </div>
  );
};
export const getStaticProps = async () => {
  const data = await (await fetch(`https://dummyjson.com/users`)).json();
  return {
    props: {
      data,
    },
  };
};
export default Index;
