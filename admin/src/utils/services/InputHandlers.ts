export const handleInputChange = (
  value: string | number,
  stateFunction: React.SetStateAction<any>,
  shouldReturnArray?: boolean
) => {
  if (value === "" || value === 0) {
    stateFunction(undefined);
  } else {
    shouldReturnArray
      ? typeof value === "string" && stateFunction(value.split(", "))
      : stateFunction(value);
  }
};

export const handleFileInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  i: number,
  setState: React.Dispatch<React.SetStateAction<(string | undefined)[]>>
) => {
  if (!e.target.files) return;
  const file: Blob | null = e.target.files[0];
  createFileUrl(file, i, setState);
  e.target.value = "";
};

export const createFileUrl = (
  file: Blob,
  i: number,
  setState: React.Dispatch<React.SetStateAction<(string | undefined)[]>>
) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setState((prev) => {
      let copy = [...prev];
      if (typeof reader.result === "string") copy[i] = reader.result;
      return copy;
    });
  };
};

export const handleImageDelete = (
  i: number,
  setState: React.Dispatch<React.SetStateAction<(string | undefined)[]>>
) => {
  setState((prev) => {
    let copy = [...prev];
    copy[i] = undefined;
    return copy;
  });
};
