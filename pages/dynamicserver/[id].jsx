import React from "react";

const Id = (props) => {
//   console.log("props", props);
  if (!props.data) {
    return <h5>loading........</h5>;
  }
  return (
    <div>
      {props && props.data ? (
        <div>
          <h1> firstName {props.data.firstName}</h1>
          <h1> lastName {props.data.lastName}</h1>
        </div>
      ) : null}
    </div>
  );
};
export const getStaticPaths = async () => {
  const data = await (await fetch(`https://dummyjson.com/users`)).json();
  const userid = data.users.map((user) => user.id);
  return {
    paths: userid.map((user) => ({ params: { id: `${user}` } })),
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const data = await (
    await fetch(`https://dummyjson.com/users/${context.params.id}`)
  ).json();
  return {
    props: {
      data,
    },
  };
};
export default Id;
