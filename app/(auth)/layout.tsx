const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-wrap items-center justify-center">
      <div className=" w-1/2 min-w-[600px]">
        <img
          src="https://images.pexels.com/photos/131773/pexels-photo-131773.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="h-screen w-full"
        />
      </div>
      <div className=" w-1/2 min-w-[600px] h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  ); 
};

export default AuthLayout;
