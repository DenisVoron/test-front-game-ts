import { FC } from "react";
import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { selectStartNumber, updateNotice } from "../../redux";
import { useDispatch } from "react-redux";

type Inputs = {
  enteredNum: string;
};

const InputField: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const startingNumber = useSelector(selectStartNumber);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onFormSubmite: SubmitHandler<Inputs> = ({
    enteredNum,
  }: Inputs): void => {
    const numBet = Number(enteredNum);
    // console.log(numBet);
    // getData(numBet);
    calculationOfResult(numBet, startingNumber);
    reset();
  };

  const calculationOfResult = (userNum: number, startingNum: number) => {
    if (userNum) {
      if (userNum < startingNum) {
        dispatch(updateNotice("Ned more number"));
        console.log("Ned more number");
      }
      if (userNum > startingNum) {
        dispatch(updateNotice("Ned less number"));
        console.log("Ned less number");
      }
      if (userNum === startingNum) {
        dispatch(updateNotice("you winner!"));
        console.log("you winner");
      }
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(onFormSubmite)} className="w-60 mx-auto">
        <input
          type="text"
          {...register("enteredNum", { required: true })}
          className="block w-full rounded-md mb-3 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="enter number"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send result
        </button>
      </form>
    </div>
  );
};

export default InputField;
