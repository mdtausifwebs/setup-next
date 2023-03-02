import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image"

const product = () => {
  const router = useRouter();
  // console.log('router', router);
  const [product, setproduct] = useState();
  // console.log("product", product);
  const [index, setindex] = useState(0);
  const [temp, setTemp] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await (
        await fetch(`https://dummyjson.com/products/${router?.query?.product}`)
      ).json();
      // console.log("data", data);
      setproduct(data);
    };

    router.query.product ? fetchdata() : null;
  }, [router]);
  useEffect(() => {
    const indexHandler = () => {
      setTimeout(() => {
        product.images.length - 1 > index ? setindex(index + 1) : setindex(0);
      }, 1000);
      console.log(index);
    };
    temp ? indexHandler() : null;
  });
  if (!product) {
    return <h5>loading........</h5>;
  }

  return (
    <div>
      {product ? (
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <div style={{ width: "100%" }}>
            {product ? (
              <Image
                src={product?.images[index]}
                alt={product?.images[index]}
                width={800} height={500}
                onMouseEnter={() => setTemp(true)}
                onMouseOut={() => setTemp(false)}
              />
            ) : null}
          </div>
          <div>
            <h5>{product?.brand}</h5>
            <h5>{product?.category}</h5>
            <h5>{product?.description}</h5>
            <h5>{product?.title}</h5>
            <h5>{product?.stock}</h5>
            <h5>{product?.rating}</h5>
            <h5>{product?.price}</h5>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default product;
