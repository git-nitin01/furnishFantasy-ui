import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user } = useAuth(); // Assuming you have an authentication context or hook

  return (
    <header className="fixed flex top-0 left-0 w-full h-14 bg-white-500 p-1 border-b-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-2xl font-bold">Furnish Fantasy</h1>
        <nav className="text-xl font-semibold flex space-x-4">
          <ul className="flex space-x-4">
            <li className="text-black">Dashboard</li>
           
          </ul>
          <div className="text-black">
            {user ? (
              <>
                <span className="mr-2">Welcome, {user?.name}</span>
              </>
            ) :  <><li className="text-black">Login</li>
            <li className="text-black">SignUp</li></>}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;