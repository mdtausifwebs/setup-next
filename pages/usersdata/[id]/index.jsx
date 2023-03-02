import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const index = () => {
  const { query } = useRouter();
  const [user, setuser] = useState();
  console.log("user", user);
  useEffect(() => {
    // https://dummyjson.com/docs/users
    const fetchdata = async () => {
      const data = await (await fetch("https://dummyjson.com/users")).json();
      const items = data.users.find((item) => {
        return item.id == query.id;
      });
      setuser(items);
    };
    fetchdata();
  }, [query]);
  if (!user) {
    return <h5>loading........</h5>;
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {user && (
          <div
            style={{ width: "50%", border: "1px solid black", padding: "10px" }}
          >
            <h1>
              Name:- {user?.firstName} {user?.lastName}
            </h1>
            <li>gender:- {user?.gender}</li>
            <li>eyeColor:- {user?.eyeColor}</li>
            <li>age :-{user?.age}</li>
            <li>bloodGroup :- {user?.bloodGroup}</li>
            <li>birthDate:-{user?.birthDate}</li>
            <p>hair</p>
            <li>color:- {user?.hair?.color}</li>
            <li>type:- {user?.hair?.type}</li>
            <li>height:- {user?.height}</li>
            <li>macAddress:- {user?.macAddress}</li>
            <li>password:- {user?.password}</li>
            <li>phone:- {user?.phone}</li>
            <li>ssn:- {user?.ssn}</li>
            <li>university:- {user?.university}</li>
            <li>userAgent:-{user?.userAgent}</li>
            <li>username:- {user?.username}</li>
            <li>weight:- {user?.weight}</li>
            <p>address</p>
            <li>address:- {user?.address?.address}</li>
            <li>city:- {user?.address?.city}</li>
            <p>bank</p>
            <li>cardExpire:- {user?.bank?.cardExpire}</li>
            <li>cardNumber:- {user?.bank?.cardNumber}</li>
            <li>cardType:- {user?.bank?.cardType}</li>
            <li>currency:- {user?.bank?.currency}</li>
            <li>iban:- {user?.bank?.iban}</li>
            <p>company</p>
            <li>department:-{user?.company?.department}</li>
            <li>name:-{user?.company?.name}</li>
            <li>title:-{user?.company?.title}</li>
            <p>company address</p>

            <li>address:- {user?.company?.address?.address}</li>
            <li>city:- {user?.company?.address?.city}</li>
            <li>postalCode:- {user?.company?.address?.postalCode}</li>
            <li>state:- {user?.company?.address?.state}</li>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
