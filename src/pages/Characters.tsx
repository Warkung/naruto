import { serviceChar } from "../service/serviceChar";

const callData = async () => {
  const response = await serviceChar();
  console.log(response);
};

function CharactersPage() {
  return <div>Characters</div>;
}

export default CharactersPage;
