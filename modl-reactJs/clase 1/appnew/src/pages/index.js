import Componet1 from "@/components/componet1";
import Componet2 from "@/components/componet2";
import React from "react";

const Index2 = () => {
    let data = new Date("1992,3,21")
    console.log(data)
  return (
    <div>
      <Componet1 name="Paco" />
      <Componet2 dat2e={data} />
    </div>
  );
};

export default Index2;
