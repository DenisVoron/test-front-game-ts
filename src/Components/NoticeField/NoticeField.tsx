import { FC } from "react";
import { useSelector } from "react-redux";
import { selectNotice } from "../../redux";

const NoticeField: FC = (): JSX.Element => {
  const resultData = useSelector(selectNotice);

  return (
    <div className="container mx-auto">
      <p className="w-56 mx-auto text-center">{resultData}</p>
    </div>
  );
};

export default NoticeField;
