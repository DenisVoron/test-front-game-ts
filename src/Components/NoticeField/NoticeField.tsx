import { FC } from "react";
import { useSelector } from "react-redux";
import { selectNotice } from "../../redux";

const NoticeField: FC = (): JSX.Element => {
  const resultData = useSelector(selectNotice);

  return (
    <div className="container mx-auto">
      <p className="w-96 py-9 mx-auto text-center text-2xl rounded-lg text-white font-bold bg-green-400 shadow-lg">
        {resultData}
      </p>
    </div>
  );
};

export default NoticeField;
