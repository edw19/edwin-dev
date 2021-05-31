function LayoutBlog({children}) {
  return (
    <main className=""> 
      <div className="grid grid-cols-12">
        <div className="col-span-2"></div>
        <div className="col-span-7">
            {children}
        </div>
        <div className="col-span-3"></div>
      </div>
    </main>
  );
}

export default LayoutBlog;
