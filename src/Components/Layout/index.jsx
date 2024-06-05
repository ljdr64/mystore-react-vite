const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-20 min-w-[360px]">
      {children}
    </div>
  );
};

export default Layout;
