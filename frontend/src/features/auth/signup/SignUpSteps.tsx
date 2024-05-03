const steps = [
  {
    id: 1,
    title: 'Datos Personales',
  },
  {
    id: 2,
    title: 'Datos de la Cuenta',
  },
  {
    id: 3,
    title: 'Imagen de Perfil',
  },
];

function SignUpSteps({ step,setStep,}: {step: number; setStep: (step: number) => void;}) {
  return (
    <header>
      <ul className="flex justify-center gap-4">
        {steps.map((s) => (
          <li
            key={s.id}
            className={`text-5xl font-semibold rounded-full  text-zinc-100 py-6 px-10 cursor-pointer bg-primary
            ${
              step == s.id && 'bg-contrast' 
            }`}
            onClick={() => setStep(s.id)}
          >
            {s.id}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default SignUpSteps;
