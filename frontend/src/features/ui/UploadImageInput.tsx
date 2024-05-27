import { useState, useRef } from 'react';
import { FiCamera } from 'react-icons/fi';

interface ImageUploadProps {
  image: File | undefined | string;
  setImage: (image: File | undefined) => void;
  optionalRender?: React.ReactNode;
}

function UploadImageInput({
  image,
  setImage,
  optionalRender,
}: ImageUploadProps) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={onChangeHandler}
        ref={ref}
        style={{ display: 'none' }}
      />
      <div onClick={() => ref.current?.click()}>
        <div className="flex justify-center">
          {image ? (
            <img
              src={typeof image === 'string' ? image : URL.createObjectURL(image as File)}
              alt="preview"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`w-[200px] min-h-[200px] rounded-full object-cover object-center cursor-pointer transition-all ${
                hovered ? 'opacity-50' : ''
              }`}
            />
          ) : (
            <div
              className="w-[200px] min-h-[100px] bg-primary bg-opacity-90 hover:bg-slate-800 rounded-full flex items-center justify-center text-9xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {optionalRender ? optionalRender : <FiCamera size={48} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadImageInput;
