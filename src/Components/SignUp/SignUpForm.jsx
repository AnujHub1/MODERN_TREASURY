import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import SignUp from "./SignUp";
import SignUp2 from "./SignUp2";

export default function SignUpForm() {
  const methods = useForm();
  let [formdata, setFormData] = useState({
    Sign_Name: "",
    contact_number: "",
    email: "",
    company: "",
    empNumber: "",
    sign_password: "",
    con_password: "",
  });
  let [page, setPage] = useState(0);

  const onSubmit = (data) => {
    if (page === 0) {
      setPage(1);
    } else {
      console.log(data);
      // Final submission logic here
    }
  };

  let pageDisplay = () => {
    if (page == 0) {
      return (
        <SignUp
          page={page}
          setPage={setPage}
          formdata={formdata}
          setFormData={setFormData}
        />
      );
    } else {
      return <SignUp2 formdata={formdata} setFormData={setFormData} />;
    }
  };

  return (
    <div className="" onSubmit={onSubmit}>
      {pageDisplay()}
    </div>
  );
}
