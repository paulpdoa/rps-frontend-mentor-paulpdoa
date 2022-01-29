import Logo from "./Logo";


const Header = ({ score }) => {
  return (
    <header className="flex justify-center select-none">
        <div className="max-w-7xl w-full flex justify-center">
            <div className="header-outline rounded-lg md:h-32 h-28 md:p-3 p-4 flex md:w-1/2 w-4/5 justify-between items-center mt-10">
                <div className="font-semibold leading-none text-white text-2xl">
                    <span className="md:block hidden"><Logo /></span>
                    <div className="md:hidden block">
                        <h1>ROCK</h1>
                        <h1>PAPER</h1>
                        <h1>SCISSORS</h1>
                    </div>
                </div>
                <div className="bg-white md:w-32 w-24 p-2 rounded-lg flex flex-col items-center">
                    <span className="score-text font-semibold tracking-wider">SCORE</span>
                    <h1 className="dark-text font-bold text-4xl">{ score }</h1>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
