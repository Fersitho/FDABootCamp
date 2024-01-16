import C1 from "@/components/c1";
import C2 from "@/components/c2";

export default function Home() {

  
const c1 = () => ({
  name: 'Gyarados'
})
  const c2 = {

    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",

    tipo: ["Water ","Flying"]
  }

  return ( 
    <div className="pacomermela">
      <C1 name={c1().name}/>
      <C2 description={c2.description} tipo={c2.tipo}/>
    </div>
  );
}
