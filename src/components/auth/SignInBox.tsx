type ButtonProps = {
  label: string;
  href: string;
  onClick?: () => void;
};

const AuthButton = ({ label, href, onClick }: ButtonProps) => (
  <a
    href={href}
    onClick={onClick}
    className="w-full bg-primary tracking-widest text-white py-4 text-lg font-black hover:bg-blue-700 hover:scale-105 hover:shadow-xl text-center block transform transition-all duration-300 ease-in-out"
  >
    {label}
  </a>
);

const SignInBox = () => {
  return (
    <div className="w-[90%] max-w-[500px] border-8 border-blue-600 py-8 sm:py-16 px-6 sm:px-12 shadow-lg">
      <div className="flex flex-col gap-6 sm:gap-8">
        <h2 className="text-blue-700 text-4xl font-black pb-10">
          Already Signed?
        </h2>
        {/* <p className="text-blue-600 text-lg">Choose your account type:</p> */}
        <AuthButton label="AGENCY" href="/agency" />
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-blue-200"></div>
          <p className="text-primary text-center text-xl">Or</p>
          <div className="h-[1px] flex-1 bg-blue-200"></div>
        </div>
        <AuthButton label="PUBLISHER" href="/publisher" />
      </div>
    </div>
  );
};

export default SignInBox;
