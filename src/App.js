import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Inc, Dec } from "./states/reducers/Reducer";

function App() {
  const curState = useSelector((state) => state.number)
  const dispatch = useDispatch();

  return (
    <div className="App h-[100vh] flex justify-center">
      <div className="my-[10%] w-80 h-[40vh] flex flex-col items-center justify-center bg-[#807f7f] shadow-md shadow-gray-500 rounded-md">

        <h3 className="text-5xl font-bold font-[Poppins]">{curState}</h3>

        <div className="btns w-56 flex justify-between">

          <button className="bg-[#3e82c1] w-40 h-8 mx-2 text-sm rounded-md border-none outline-none my-4 drop-shadow-md"
          onClick={() => dispatch(Inc(5))}
          >increment</button>

          <button className="bg-[#3e82c1] w-40 h-8 mx-2 text-sm rounded-md border-none outline-none my-4 drop-shadow-md"
          onClick={() => dispatch(Dec(3))}
          >decrement</button>
        </div>

      </div>
    </div>
  );
}

export default App;
