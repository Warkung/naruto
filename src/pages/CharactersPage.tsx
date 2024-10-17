import { useEffect, useState } from "react";
import { Characters, serviceChar } from "../service/serviceChar";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function CharactersPage() {
  const [fetchar, setFetchchar] = useState<Characters[]>([]);
  const [char, setChar] = useState<Characters[]>([]);
  const callData = async () => {
    const response = await serviceChar();
    setFetchchar(response.data.characters);
    setChar(response.data.characters);
  };

  useEffect(() => {
    callData();
  }, []);

  const { register, watch } = useForm();
  const keyword = watch("keyword");

  useEffect(() => {
    const response = fetchar.filter((item) =>
      item.name.toLowerCase().includes(keyword?.toLowerCase())
    );
    setChar(response);
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
        <h1 className="text-[100px] text-white font-bold ">Character List</h1>
      </div>
      <form className="mb-9 flex flex-col">
        <label className="text-white" htmlFor="">
          Search Name
        </label>
        <input {...register("keyword")} className="w-52" type="text" />
      </form>
      <div className=" grid grid-cols-4 gap-5">
        {char.map((item) => {
          return (
            <div className="text-white" key={item.id}>
              {item.name}
              <img src={item.images[1] || item.images[0]} alt="character" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharactersPage;
