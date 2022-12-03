import React from "react";
import CategoryEachItem from "./CategoryEachItem";

function Page() {
  return (
    <div
      style={{
        fontSize: "19px",
        fontWeight: "700",
        lineHeight: "24px",
        padding: "0",
        color: "#fff",
        marginLeft: "40px",
        marginTop: "30px"
      }}
    >
     <CategoryEachItem />
    </div>
  );
}

export default Page;
