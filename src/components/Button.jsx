export function Button({ brand = "a", children }) {
  return (
    <button className={`btn btn-${brand}`}>
      {children}
    </button>
  );
}
