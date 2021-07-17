function Header() {
  return (
    <header className={"pl-16 pr-20 bg-[#EFF3F3] h-72 flex items-center justify-between"}>
      <div>
        <h1 className={"text-4xl font-mono"}>Farrukh Zeb</h1>
        <h1 className={"text-4xl font-mono"}>Full Stack Javascript Developer</h1>
      </div>
      <div
        style={{ width: 136, height: 136 }}
        className={"bg-white rounded-full flex items-center justify-center"}>
        <p className={"text-7xl text-[#BAC9C9] font-rochester"}>F</p>
      </div>
    </header>
  );
}

export default Header;
