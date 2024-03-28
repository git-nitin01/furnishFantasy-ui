
import Login from "../../Login";

const Header = () => {
  const navItems = [
    { key: 1, name: "Home", link: "/" },
    { key: 2, name: "Gallery", link: "/gallery" }
  ]

  return (
    <header className="z-[999] text-black fixed flex top-0 left-0 w-full h-14 bg-white p-1 border-b-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-2xl font-bold">Furnish Fantasy</h1>
        <nav className="text-xl font-semibold flex space-x-4">
          <ul className="flex space-x-4">
            {
              navItems.map(item => (
                <li key={item.key} className="nav-item">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))
            }
            <li className="nav-item">
              <Login />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;