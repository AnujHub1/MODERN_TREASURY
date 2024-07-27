import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    if (page === formtitle.length - 1) {
      alert("save");
      console.log(data);
    } else {
      setPage((currPage) => currPage + 1);
      setFormData({ ...formData, ...data });
    }
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
