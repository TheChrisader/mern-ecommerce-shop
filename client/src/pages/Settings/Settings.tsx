import React, { ChangeEvent, useState } from "react";

const Settings = () => {
  const [filenput, setFileInput] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [previewSource, setPreviewSource] = useState<any>("");
  const [selectedFile, setSelectedFile] = useState<Blob | null>(null);

  const handleFileInputChange = (
    e: React.ChangeEvent<HTMLInputElement | null>
  ): void => {
    if (!e.target.files) return;
    const file: Blob | null = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInput(e.target.value);
  };
  const previewFile = (file: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleSubmitFile = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.log("error");
    };
  };
  const uploadImage = async (
    base64EncodedImage: String | ArrayBuffer | null
  ) => {
    try {
      const data = await fetch("http://localhost:8800/api/upload", {
        method: "POST",
        body: JSON.stringify({ image: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      });
      const result = await data.json();
      console.log(result);
      setFileInput("");
      setPreviewSource("");
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <form action="submit">
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={filenput}
        />
        <button type="submit" onClick={handleSubmitFile}>
          Submit
        </button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
    </div>
  );
};

export default Settings;
