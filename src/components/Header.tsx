import MoonIcon from "../assets/icon-moon.svg";

const Header = () => {
    const themeSwitchHandler = () =>
        alert("This feature will be implemented soon!");
    return (
        <header className="flex items-center justify-between ">
            <h1 className="text-4xl font-bold capitalize tracking-widest text-veryLightGray lg:text-5xl">
                TODO
            </h1>
            <button
                className="rounded-full p-2 hover:bg-dark-veryDarkGrayishBlue"
                onClick={themeSwitchHandler}
            >
                <img src={MoonIcon} alt="theme switcher icon" />
            </button>
        </header>
    );
};

export default Header;
