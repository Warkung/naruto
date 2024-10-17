import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="max-w-[90%] m-auto">
      <div className="flex justify-center h-32 mb-16">
        <img
          className=""
          src="/public/images/35b322e5898871a6bd611b365323e768.jpg"
          alt="Logo"
        />
      </div>
      <div className="grid grid-cols-3 gap-5 ">
        <Link to={`characters`} className="m-auto">
          <h1 className="text-white text-[45px] font-bold mb-4">Characters</h1>
          <img className="h-56 w-96" src="/public/images/characters.jpg" alt="" />
        </Link>
        <Link to={`clan`} className="m-auto">
          <h1 className="text-white text-[45px] font-bold mb-4">Clan</h1>
          <img className="h-56 w-96" src="/public/images/clans.jpeg" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
