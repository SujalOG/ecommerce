import { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const history = useHistory();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      history.push(`/search?query=${searchQuery}`);
    }
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <Fragment>
      {/* Navigation bar */}
      <nav className="bg-blue-700 text-white border-b border-gray-200 lg:px-20 px-2">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center py-6">
              <img
                src="https://toppng.com/uploads/preview/logo-store-png-clothing-shop-logo-11563048950nluklrhtlb.png"
                alt="Shopwithsujal"
                className="h-8 w-8 mr-2"
              />
              <span className="font-bold text-white text-lg">
                Shop With Zosh
              </span>
            </Link>

            {/* Navigation menu */}
            <ul className="hidden md:flex items-center space-x-4">
              <li>
                <Link
                  to="/men"
                  className="font-medium text-white hover:text-black"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="font-medium text-white hover:text-black"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  className="font-medium text-white hover:text-black"
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link
                  to="/home-living"
                  className="font-medium text-white hover:text-black"
                >
                  Home & Living
                </Link>
              </li>
              <li>
                <Link
                  to="/beauty"
                  className="font-medium text-white hover:text-black"
                >
                  Beauty
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  className="font-medium text-white hover:text-black"
                >
                  Offers
                </Link>
              </li>
            </ul>

            {/* Search icon and button */}
            <div className="flex items-center">
              <button onClick={toggleSearchBar} className="text-white p-2">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>

              <span className="px-2">User</span>
              <span className="px-2">Cart</span>
            </div>

            {/* Mobile navigation menu */}
            <div className="md:hidden flex items-center">
              <button onClick={handleShowMenu} className="text-white p-2">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search bar */}
      {showSearchBar && (
        <div className="bg-white p-4">
          <form
            className="flex justify-center max-w-sm mx-auto"
            onSubmit={handleSearchSubmit}
          >
            <div className="relative w-full">
              <input
                type="search"
                className="block w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 focus:text-gray-900 sm:text-sm"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button
                type="submit"
                className="absolute inset-y-0 left-0 flex items-center justify-center pl-3"
              >
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.716 14.966A7.25 7.25 0 1114.35 8.33a7.25 7.25 0 01-6.634 6.635zM15.5 9.75a5.75 5.75 0 10-11.5 0 5.75 5.75 0011.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Mobile navigation menu */}
      {showMenu && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col py-4 space-y-2 px-5">
            <li>
              <Link
                to="/men"
                className="font-medium text-white hover:text-black"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className="font-medium text-white hover:text-black"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/kids"
                className="font-medium text-white hover:text-black"
              >
                Kids
              </Link>
            </li>
            <li>
              <Link
                to="/home-living"
                className="font-medium text-white hover:text-black"
              >
                Home & Living
              </Link>
            </li>
            <li>
              <Link
                to="/beauty"
                className="font-medium text-white hover:text-black"
              >
                Beauty
              </Link>
            </li>
            <li>
              <Link
                to="/offers"
                className="font-medium text-white hover:text-black"
              >
                Offers
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
}

export default Navbar;
