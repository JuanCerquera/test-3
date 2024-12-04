import { Switch } from "@chakra-ui/react";
import { Label } from "/src/app/components/ui/label.jsx";
import { Checkbox } from "/src/app/components/ui/checkbox.jsx";
import { Fragment, useReducer, useState } from "react";
import { toCurrency } from "/src/app/utilities/filters";
import { Editor } from "@tinymce/tinymce-react";
import useItem from "/src/app/hooks/useItem";
import useErrors from "/src/app/hooks/useErrors";
import FieldError from "./FieldError";

function FormGenericInput({ label, required = false, ...props }) {
  const item = useItem();

  return (
    <div>
      <label className="text-slate-600">
        {label}
        <input
          className="text-black"
          required={required}
          {...props}
          defaultValue={item ? item[props.name] : props.defaultValue}
        />
      </label>
      <FieldError name={props.name} />
    </div>
  );
}

export function FormInput(props) {
  return <FormGenericInput type="text" {...props} />;
}

export function FormSwitch({
  name,
  label,
  value = 1,
  defaultChecked,
  ...props
}) {
  const item = useItem();
  const checked = defaultChecked ?? (item ? item[name] : false);
  return (
    <div className="flex items-center gap-2 m-4">
      <Switch
        name={name}
        colorScheme="tailwindGreen"
        value={value}
        defaultChecked={checked}
        size="lg"
        {...props}
      />
      <Label htmlFor={name}>{label}</Label>
    </div>
  );
}

export function FormMultipleCheckbox({ name, label, options }) {
  const item = useItem();
  return (
    <div>
      <label htmlFor={name} className="text-slate-500">
        {label}
      </label>
      <div className="">
        {options.map((option) => (
          <FormSwitch
            key={option.id}
            name={name}
            label={option.name}
            value={option.id}
            defaultChecked={item ? item[name].includes(option.id) : false}
          />
        ))}
      </div>
      <FieldError name={name} />
    </div>
  );
}

export function FormColorField({ label, required = true, ...props }) {
  const item = useItem();
  return (
    <div>
      <label className="text-slate-600">
        {label}:<br />
        <input
          className="color-input"
          type="color"
          required={required}
          {...props}
          defaultValue={item ? item[props.name] : props.defaultValue}
        />
      </label>
      <FieldError name={props.name} />
    </div>
  );
}

export function FormPrice({ label, name, ...props }) {
  const item = useItem();
  const defaultValue = item?.price ?? 0;
  const [price, setPrice] = useState(defaultValue);

  function handleChange(event) {
    const input = event.target.value;
    let price = Number(input.replaceAll(/[.$]/g, ""));
    if (!isNaN(price)) {
      setPrice(price);
    }
  }

  return (
    <>
      <input type="hidden" value={price} name={name} {...props} />
      <FormInput
        label={label}
        value={toCurrency(price)}
        onChange={handleChange}
      />
    </>
  );
}

export function FormDuration({ label, name }) {
  const item = useItem();
  const defaultValue = item ? item[name] : "00:00:00";
  const [initialHours, initialMins, initialSecs] = defaultValue.split(":");
  const [duration, setDuration] = useState({
    hours: initialHours,
    minutes: initialMins,
    seconds: initialSecs,
  });

  function handleChange(identifier, value) {
    const newDuration = { ...duration };
    newDuration[identifier] = value;
    setDuration(newDuration);
  }

  return (
    <div>
      <input
        type="hidden"
        value={`${duration.hours}:${duration.minutes}:00`}
        name={name}
      />

      <label className="text-slate-600">
        {label}:
        <div className="flex justify-center items-center gap-1">
          {["hours", "minutes"].map((identifier) => (
            <Fragment key={identifier}>
              <input
                type="number"
                value={duration[identifier]}
                onChange={(event) => {
                  handleChange(identifier, event.target.value);
                }}
                min="0"
              />
              {identifier !== "minutes" && <span>:</span>}
            </Fragment>
          ))}
        </div>
      </label>
      <FieldError name={name} />
    </div>
  );
}

export function TextArea({ label, className, ...props }) {
  const item = useItem();
  return (
    <div>
      <label className="text-slate-600 h-full" htmlFor={props.name}>
        {label}
      </label>
      <textarea
        className={"text-black " + className}
        defaultValue={item ? item[props.name] : props.defaultValue}
        {...props}
      ></textarea>
      <FieldError name={props.name} />
    </div>
  );
}

export function RichTextArea({ label, className, ...props }) {
  const item = useItem();
  const defaultValue = item ? item[props.name] : "";
  return (
    <div className={className}>
      <label className="text-slate-600 h-full" htmlFor={props.name}>
        {label}
      </label>
      <Editor
        apiKey="5zii7z887w1163tmwxmd08oh6qg6xh21au1imv9tgutid01c"
        init={{
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
          toolbar:
            "bold italic underline strikethrough | forecolor backcolor | align | checklist numlist bullist indent outdent | emoticons charmap",
          menubar: false,
        }}
        initialValue={defaultValue}
      />
      <FieldError name={props.name} />
    </div>
  );
}

export function Select({ label, options, className, ...props }) {
  const item = useItem();
  console.log(options);
  return (
    <div>
      <label className="text-slate-600" htmlFor={props.name}>
        {label}
      </label>
      <select className={"text-black " + className} {...props}>
        {options.map((option) => (
          <option
            key={option.id}
            value={option.id}
            selected={item ? item[props.name] == option.id : false}
          >
            {option.name}
          </option>
        ))}
      </select>
      <FieldError name={props.name} />
    </div>
  );
}

export function FormPassword(props) {
  return <FormGenericInput type="password" {...props} />;
}

export function FormEmail(props) {
  return <FormGenericInput type="email" {...props} />;
}

export function FormPhone(props) {
  return <FormGenericInput type="tel" {...props} />;
}
