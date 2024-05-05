import { HiInformationCircle } from 'react-icons/hi';
import {
  hasNumber,
  hasSpecialCharacter,
  hasUpperCase,
} from './utils/passwordRegexFunctions';
import { Tooltip } from 'react-tooltip';

interface Props {
  password: string;
}

function PasswordStrengthIndicator({ password = '' }: Props) {
  if (!password) {
    return null;
  }
  const errors = {
    length: password.length >= 8 ? null : 'Contener al menos 8 caracteres.',
    uppercase: hasUpperCase(password)
      ? null
      : 'Contener al menos una letra mayúscula.',
    number: hasNumber(password) ? null : 'Contener al menos un número.',
    specialCharacter: hasSpecialCharacter(password)
      ? null
      : 'Contener al menos un caracter especial.',
  };

  const strength = Object.values(errors).filter(
    (error) => error == null
  ).length;

  const strengthPercentage = (strength / Object.keys(errors).length) * 100;

  const { color, text, fontColor } = getDisplayInfo(strengthPercentage);

  return (
    <div className="flex flex-col gap-3">
      <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          style={{ width: `${strengthPercentage}%` }}
          className={`h-full transition-all ${color}`}
        ></div>
      </div>
      <div className={`flex  justify-end  text-3xl ${fontColor}`}>
        <span className="text-xl flex items-center justify-center">{text}</span>

        {strengthPercentage != 100 && (
          <>
            <HiInformationCircle
              id="password-strength-info"
              className=" ml-2 text-3xl"
            />
            <Tooltip
              anchorSelect="#password-strength-info"
              place="bottom"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.8))' }}
            >
              <div className="flex flex-col gap-2 ">
                <span className="font-bold">La contraseña debe:</span>
                <ul className="list-disc list-inside text-2xl">
                  {Object.values(errors)
                    .filter((error) => error != null)
                    .map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                </ul>
              </div>
            </Tooltip>
          </>
        )}
      </div>
    </div>
  );
}

function getDisplayInfo(strengthPercentage: number): {
  color: string;
  text: string;
  fontColor: string;
} {
  if (strengthPercentage === 100) {
    return {
      color: 'bg-green-500',
      text: 'Fuerte',
      fontColor: 'text-green-500',
    };
  }
  if (strengthPercentage >= 75) {
    return {
      color: 'bg-yellow-500',
      text: 'Buena',
      fontColor: 'text-yellow-500',
    };
  }
  if (strengthPercentage >= 50) {
    return {
      color: 'bg-yellow-500',
      text: 'Débil',
      fontColor: 'text-yellow-500',
    };
  }
  return { color: 'bg-red-500', text: 'Muy débil', fontColor: 'text-red-500' };
}

export default PasswordStrengthIndicator;
