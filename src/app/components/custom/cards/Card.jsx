export default function Card({ children, className }) {
  return (
    <section
      className={
        "bg-slate-50 rounded-lg p-4 shadow-md border-t-8 border-slate-300 " +
        className
      }
    >
      {children}
    </section>
  );
}
