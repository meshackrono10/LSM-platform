const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return ( 
    <div className="h-full flex items-center justify-center">
      <h2>Welcome to SkillBled where you get you courses of your choice with favorable prices </h2>
      {children}
    </div>
   );
}
 
export default AuthLayout;