import React from "react";
import Link from "next/link";
import Image from "next/image"
const index = (props) => {
  //   console.log('props', props.data.products);
  if (!props.data) {
    return <h5>loading........</h5>;
  }
  return (
    <div>
      <div>
        <h1>product page</h1>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        {props &&
          props.data &&
          props?.data?.products.map((product, i) => {
            // console.log("product", product);
            return (
              <Link key={i} href={`/product/${product.id}`} style={{width:"25%"}}>
                <Image width={230} height={250} src={product.thumbnail} alt={product.thumbnail} />
                <h5>{product.brand}</h5>
                <h5>{product.title}</h5>
                <h5>{product.description}</h5>
                <h5>{product.price}</h5>
                <h5>{product.discountPercentage}</h5>
                <h5>{product.rating}</h5>
                <h5>{product.stock}</h5>
                <h5>{product.category}</h5>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  // console.log("this is server side rendring");
  const data = await (await fetch(`https://dummyjson.com/products`)).json();
  return {
    props: {
      data,
    },
  };
};

export default index;
