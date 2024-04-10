import { ReactNode } from "react";
import { IoInformation } from "react-icons/io5";
import { FaExclamation } from "react-icons/fa";

const Alert = ({
  children,
  type,
}: {
  children: ReactNode;
  type: "warning" | "info";
}): JSX.Element => (
  <div className="flex gap-2 p-4 rounded-md mt-7 border border-secondary text-tertiary">
    <div className="w-fit">
      {type === "warning" ? (
        <FaExclamation className="w-5 h-5" />
      ) : (
        <IoInformation className="w-5 h-5" />
      )}
    </div>
    <div className="not-prose text-sm">{children}</div>
  </div>
);

export default Alert;
