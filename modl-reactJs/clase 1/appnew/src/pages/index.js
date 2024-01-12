import Componet1 from "@/components/componet1";
import Componet2 from "@/components/componet2";
import React from "react";

const Index2 = () => {
    const date = new Date("1992,3,21")

  return (
    <div>
      <Componet1 name="Paco" />
      <Componet2 date={date} />
    </div>
  );
};

export default Index2;
