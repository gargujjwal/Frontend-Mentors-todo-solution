import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";

const Header = () => {
    return (
        <header className="flex items-center justify-between ">
            <h1 className="text-4xl font-bold capitalize tracking-widest text-veryLightGray lg:text-5xl">
                TODO
            </h1>
            <button className="rounded-full p-2 hover:bg-dark-veryDarkGrayishBlue">
                <img src={MoonIcon} alt="theme switcher icon" />
            </button>
        </header>
    );
};

export default Header;
