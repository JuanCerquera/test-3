export function FullWidthButton({ children }) {
  return (
    <button
      type="submit"
      className="w-full bg-black text-white rounded-2xl py-3 mt-6"
    >
      {children}
    </button>
  );
}
