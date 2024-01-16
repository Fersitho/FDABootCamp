import EmailComponent from "@/components/EmailComponent";
import PasswordComponent from "@/components/PasswordComponent";
import PersonalDataComponent from "@/components/PersonalDataComponent";
import { useEffect } from "react";

export default function Home() {
useEffect(() => {
  first

  return () => {
    second
  }
}, [third])

  const userInfo = {

    Name: "Emilio",
    LastName: "Pérez",
    Email: "emilio.perez@gmail.com"

  }

  return (
    <>
      <PersonalDataComponent />
      <EmailComponent />
      <PasswordComponent />
    </>
  );
}
