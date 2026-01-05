const Container = ({
  children,
  className = "",
  fluid = false,
  padding = true,
}) => {
  return (
    <div
      className={`
        w-full
        ${fluid ? "" : "max-w-screen-lg"}
        mx-auto

        ${padding ? "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12" : ""}

        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
