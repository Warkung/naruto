import { useEffect, useState } from "react";
import { Characters, serviceChar } from "../service/serviceChar";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function CharactersPage() {
  const [fetchars, setFetchchars] = useState<Characters[]>([]);
  const [chars, setChars] = useState<Characters[]>([]);
  const callData = async () => {
    const response = await serviceChar();
    setFetchchars(response.data.characters);
    setChars(response.data.characters);
  };

  useEffect(() => {
    callData();
  }, []);

  const { register, watch } = useForm();
  const name = watch("name");

  useEffect(() => {
    const response = fetchars.filter((item) =>
      item.name.toLowerCase().includes(name?.toLowerCase())
    );
    setChars(response);
  }, [name]);

  return (
    <div className="w-[90%] m-auto">
      <div>
        <h1 className="text-[60px] text-white font-bold naruto pt-7">
          Naruto Character List
        </h1>
      </div>
      <form className="mb-9 flex-col grid grid-cols-3 gap-x-5">
        {/* Search Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Search By Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Input name"
            required
          />
        </div>
      </form>
      <div className=" grid grid-cols-3 gap-5">
        {chars.map((char) => {
          return (
            <Link
              to={`characters/${char.id}`}
              className="text-white mb-12 naruto text-xl"
              key={char.id}
            >
              <div className="mb-2">{char.name}</div>
              <img className=" rounded-md" src={char.images[1] || char.images[0]} alt="character" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CharactersPage;
