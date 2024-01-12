export default function Home() {
  const opt = { day: "numeric", month: "numeric", year: "2-digit" };

  const date = new Date().toLocaleDateString("es-ES", opt);

  return (
    <>
      <h1> Hola soy fer y hoy es {date}</h1>
    </>
  );
}
