import EmailComponent from "@/components/EmailComponent";
import PasswordComponent from "@/components/PasswordComponent";
import PersonalDataComponent from "@/components/PersonalDataComponent";

export default function Home() {

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
