import { FormErrorsContext } from "/src/app/utilities/contexts";
import { getContentElement } from "/src/app/utilities/elements";
import { useEffect } from "react";
import { Form, useActionData } from "react-router-dom";
import { toast } from "react-toastify";

export default function ValidatedForm({ children, ...props }) {
  const errorDict = useActionData();
  useEffect(() => {
    if (errorDict) {
      //getContentElement().scrollTo(0, 0);
      window.scrollTo(0, 0);
      toast.error("Hay errores en el formulario. Por favor revísalos");
    }
  }, [errorDict]);

  return (
    <FormErrorsContext.Provider value={errorDict}>
      <Form {...props}>{children}</Form>
    </FormErrorsContext.Provider>
  );
}
