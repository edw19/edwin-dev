function Code({ children }) {
  return (
    <div className="w-full py-2 text-center bg-gray-900 text-white rounded-md">
      <code>{children}</code>
    </div>
  );
}

export default Code;
