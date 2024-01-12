

export default function Home() {
  
  let name ="Paco"

  const contentH1 = (name) => `Hola mundo ${name}`

  return (
    <>
        <h1>{contentH1(name)}</h1>
    </>
  );
}
