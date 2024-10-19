import { Link, useParams } from "react-router-dom";
import { CharIdData, serviceCharById } from "../service/serviceChar";
import { useEffect, useState } from "react";

function CharactersDetail() {
  const { id } = useParams();
  const [char, setChar] = useState<CharIdData | undefined>(undefined);

  const callData = async () => {
    const response = await serviceCharById(id);
    setChar(response.data);
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <div className="flex flex-col text-white">
      <div className="my-4">
        <Link
          to={"/"}
          className="bg-gray-500 px-5 py-3 rounded-lg w-28 text-center font-bold text-lg"
        >
          Home
        </Link>
      </div>
      <div className="">
        <div className="text-white text-[40px] text-center my-5 naruto">
          {char?.name}
        </div>
        <img
          className="m-auto h-52"
          src={char?.images[1] || char?.images[0]}
          alt="character-image"
        />
      </div>
      <div className="flex flex-col w-[80%] justify-start m-auto mt-20">
        <div className="text-xl mb-2">
          <span className="pr-5">Birthday</span>
          <span>:</span>
          <span className=""> {char?.personal.birthdate}</span>{" "}
        </div>
        <div className="text-xl mb-2">
          <span className="pr-5">Blood Type</span>
          <span>:</span>
          <span className=""> {char?.personal.bloodType}</span>{" "}
        </div>
        <div className="text-xl mb-2">
          <span className="pr-5">Title</span>
          <span>:</span>
          <span className=""> {char?.personal.titles}</span>{" "}
        </div>
      </div>
    </div>
  );
}

export default CharactersDetail;
