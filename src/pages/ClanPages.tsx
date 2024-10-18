import { useEffect, useState } from "react";
import { Clans, serviceClans } from "../service/serviceClan";
import { Link } from "react-router-dom";
import { serviceCharById } from "../service/serviceChar";
import { set } from "react-hook-form";

function ClanPages() {
  const [clans, setClans] = useState<Clans[]>([]);
  const [chars, setChars] = useState([]);
  const callData = async () => {
    const responseClan = await serviceClans();
    console.log(responseClan.data.clans);
    setClans(responseClan.data.clans)
    for (const clan of responseClan.data.clans) {
      for (const chars of clan.characters) {        
        const responseCharId = serviceCharById(chars)
        console.log(responseCharId);
        
      }
    }
    
     
        

  };

  useEffect(() => {
    callData();
  }, []);
  return (
    <div>
      <div className="">
        <Link to={"/"}>
          <span className="px-3 py-2 bg-gray-500 rounded-lg text-white font-bold">
            Home
          </span>
        </Link>
      </div>
      <div>
        <h1 className="text-[100px] text-white font-bold ">Clans List</h1>
      </div>
      
   
    </div>
  );
}

export default ClanPages;
