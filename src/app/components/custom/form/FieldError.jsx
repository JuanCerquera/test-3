import useErrors from "/src/app/hooks/useErrors";

export default function FieldError({ name }) {
  const errorDict = useErrors() ?? {};
  let errors = [];
  if (Object.keys(errorDict).includes(name)) {
    errors = errorDict[name];
  }

  return errors.map((error) => (
    <span key={error} className="text-red-600">
      {error}
    </span>
  ));
}
