import Heading from "@/features/ui/Heading";

interface Props{
    label:string
}
function SignUpFormHeader({label}:Props) {
  return (
    <header className="text-center py-5">
      <Heading type="h1">Crea tu cuenta</Heading>
      <p>{label}</p>
    </header>
  );
}

export default SignUpFormHeader;
