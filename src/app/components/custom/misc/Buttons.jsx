import { Layout, Proportions } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function PrimaryButton({ children, ...props }) {
  return (
    <ShadowedButton
      className="bg-primary text-white hover:bg-primary-900"
      {...props}
    >
      {children}
    </ShadowedButton>
  );
}

export function SecondaryButton({ children, ...props }) {
  return (
    <ShadowedButton
      className="bg-slate-100 text-slate-600 hover:bg-slate-50"
      {...props}
    >
      {children}
    </ShadowedButton>
  );
}

function ShadowedButton({ children, className, color, ...props }) {
  return (
    <LayoutButton
      className={
        "drop-shadow-lg rounded-md p-3 m-3 active:drop-shadow-none min-w-40 text-center " +
        className
      }
      style={color ? { backgroundColor: color } : null}
      {...props}
    >
      {children}
    </LayoutButton>
  );
}

export function TertiaryButton({ children, type, onButtonClick }) {
  return (
    <button
      type={type}
      className="underline text-sm text-slate-600 p-1 my-3 block active:drop-shadow-none hover:text-slate-800"
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}

function LayoutButton({ children, to, ...props }) {
  return to ? (
    <Link to={to} {...props}>
      {children}
    </Link>
  ) : (
    <button {...props}>{children}</button>
  );
}
