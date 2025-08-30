interface NavigationProps {
  setIsSigned: (value: boolean) => void;
  isSigned: boolean;
}

function Navigation({ setIsSigned, isSigned }: NavigationProps) {
  return (
    <>
      <div className="navigation">
        <img src="/img/netflix-logo-1.png" alt="Netflix" className="netflix" />
        {isSigned ? null : (
          <button className="signIn" onClick={() => setIsSigned(true)}>
            Sign in
          </button>
        )}
      </div>
    </>
  );
}
export default Navigation;
