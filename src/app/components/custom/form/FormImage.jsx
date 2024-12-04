import { useRef, useState } from "react";
import { SecondaryButton } from "/src/app/components/custom/misc/Buttons";
import DropZone from "/src/app/components/custom/misc/DropZone";
import { useContext } from "react";
import { ItemContext } from "/src/app/utilities/contexts";

export default function FormImage({ name, label = null }) {
  const item = useContext(ItemContext);
  const initialValue = item ? item[name] : null;
  const [image, setImage] = useState(initialValue);
  const fileInputRef = useRef();

  function handleImageDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setImageFromFiles(files);
    fileInputRef.current.files = files;
  }

  function setImageFromFiles(files) {
    const image = URL.createObjectURL(files[0]);
    setImage(image);
  }

  function handleBoxClick() {
    fileInputRef.current.click();
  }

  function handleFileUpload(event) {
    const files = event.target.files;
    setImageFromFiles(files);
  }

  function handleChangeImage() {
    setImage(null);
    fileInputRef.current.value = "";
  }

  return (
    <div>
      {label && <label className="text-slate-600">{label}:</label>}
      {image ? (
        <ImagePreview
          image={image}
          alt="Imagen"
          onChangeImage={handleChangeImage}
        />
      ) : (
        <DropZone onImageDrop={handleImageDrop} onBoxClick={handleBoxClick} />
      )}
      <input
        type="file"
        name={name}
        id={name}
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileUpload}
        hidden
      />
    </div>
  );
}

function ImagePreview({ image, alt, onChangeImage }) {
  return (
    <div className="flex flex-col items-center gap-2 h-full justify-between">
      <img src={image} alt={alt} className="shadow-sm rounded-md h-60 max-w-xl" />
      <SecondaryButton onClick={onChangeImage} type="button">
        Cambiar
      </SecondaryButton>
    </div>
  );
}
