import ValidatedForm from "./ValidatedForm";

export default function ConsciousForm({ children, ...props }) {
  const companyId = localStorage.getItem("user_id");

  return (
    <ValidatedForm {...props}>
      <input type="hidden" name="company" value={companyId} />
      {children}
    </ValidatedForm>
  );
}
