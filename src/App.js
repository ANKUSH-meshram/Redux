import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Inc, Dec } from "./states/reducers/Reducer";

function App() {
  const curState = useSelector((state) => state.number)
  const dispatch = useDispatch();

  return (
    <div className="App h-[100vh] flex flex-col justify-center items-center">

      <h3 className="text-4xl font-bold text-gray-600">
        Increment/Decrement counter
      </h3>
      <p className="text-lg text-gray-700 mt-4 font-bold">
        using React and Redux
      </p>

      <div className="mt-6 btns w-32 h-10 flex justify-evenly items-center bg-gray-700 rounded-sm drop-shadow-md">

        <button className="flex items-center justify-center text-2xl font-bold text-slate-900 text-center  cursor-pointer w-1/3 hover:text-red-300"
          onClick={() => dispatch(Dec(3))}
          >-</button>

        <h3 className="bg-gray-400 h-9 w-1/3 text-center items-center flex justify-center ">{curState}</h3>

        <button className="flex items-center justify-center text-2xl font-bold text-slate-900 text-center  cursor-pointer w-1/3 h-full hover:text-red-300"
          onClick={() => dispatch(Inc(3))}
          >+</button>
      </div>

    </div>
  );
}

export default App;
