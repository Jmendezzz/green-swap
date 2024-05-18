import { useState } from "react"
import UploadImageInput from "../ui/UploadImageInput"

function CreateProductForm() {
    const [file, setFile] = useState<File | undefined>(undefined)
    function handleFileChange (file: File | undefined) {
        setFile(file)

    }
    
  return (
    <form>
        <UploadImageInput image={file} setImage={handleFileChange} />
    </form>
  )
}

export default CreateProductForm