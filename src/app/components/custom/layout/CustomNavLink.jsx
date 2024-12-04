import { NavLink } from "react-router-dom";

export default function CustomNavLink({ to, Icon, children }) {
  return (
    <NavLink to={to} className="nav-item">
      {({ isActive }) => (
        <>
          <div className="flex justify-start items-center gap-4">
            <Icon className="size-8 md:size-6" />
            <span className="max-md:hidden">{children}</span>
          </div>
          {isActive && (
            <div
              id="active-flag"
              className="max-md:hidden bg-primary w-1 rounded-sm"
            />
          )}
        </>
      )}
    </NavLink>
  );
}
