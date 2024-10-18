import { useEffect, useState } from "react";
import { Characters, serviceChar } from "../service/serviceChar";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function CharactersPage() {
  const [fetchars, setFetchchars] = useState<Characters[]>([]);
  const [chars, setChars] = useState<Characters[]>([]);
  const callData = async () => {
    const response = await serviceChar();
<<<<<<< Updated upstream
    setFetchchars(response.data.characters);
    setChars(response.data.characters);
=======
    console.log(response);
    
    setFetchchar(response.data.characters);
    setChar(response.data.characters);
>>>>>>> Stashed changes
  };

  useEffect(() => {
    callData();
  }, []);

  const { register, watch } = useForm();
  const keyword = watch("keyword");

  useEffect(() => {
    const response = fetchars.filter((item) =>
      item.name.toLowerCase().includes(keyword?.toLowerCase())
    );
    setChars(response);
  }, [keyword]);

  return (
    <div className="w-[90%] m-auto">
      <div className="">
        <Link to={"/"}>
          <span className="px-3 py-2 bg-gray-500 rounded-lg text-white font-bold">
            Home
          </span>
        </Link>
      </div>
      <div>
<<<<<<< Updated upstream
        <h1 className="text-[70px] text-white font-bold ">Character List</h1>
=======
        <h1 className="text-[80px] text-white font-bold ">Character List</h1>
>>>>>>> Stashed changes
      </div>
      <form className="mb-9 flex flex-col">
        <label className="text-white" htmlFor="">
          Search Name
        </label>
        <input {...register("keyword")} className="w-52" type="text" />
      </form>
      <div className=" grid grid-cols-4 gap-5">
        {chars.map((char) => {
          return (
            <div className="text-white" key={char.id}>
              {char.name}
              <img src={char.images[1] || char.images[0]} alt="character" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharactersPage;
