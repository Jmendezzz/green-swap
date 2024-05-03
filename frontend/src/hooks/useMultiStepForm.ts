import { useState } from "react";

function useMultiStepForm(stepsNumber: number) {
    const [currentStep, setCurrentStep] = useState(0);

    const next = () => {
        if(currentStep === stepsNumber - 1) return;
        setCurrentStep((prev) => prev + 1);
    };
    const prev = () => {
        if(currentStep === 0) return;
        setCurrentStep((prev) => prev - 1);
    }

    const goToStep = (step: number) => {
        if(step < 0 || step >= stepsNumber) return;
        setCurrentStep(step);
    }

    return {
        currentStep,
        next,
        prev,
        goToStep
    }


}
export default useMultiStepForm;