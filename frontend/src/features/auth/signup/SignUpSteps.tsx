import { useSignUpContext } from "@/context/SignUpContext";

function SignUpSteps() {
  const {currentStep, stepsNumber} = useSignUpContext();


  return (
    <header>
      <ul className="flex justify-center gap-10">
        {Array.from({ length: stepsNumber }).map((_, index) => (
          <li
            key={index}
            className={`w-10 h-10 rounded-full flex items-center justify-center py-10 px-10 text-primary font-bold text-5xl ${
              currentStep === index ? "bg-contrast" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </header>
  );
}
export default SignUpSteps;
