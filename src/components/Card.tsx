import { CardTypes } from "@/types/card.types";
import Image from "next/image";
import React from "react";

interface Props extends CardTypes {
  setId: React.Dispatch<React.SetStateAction<string | null>>;
}

function Card(prop: Props) {
  const handleClick = () => prop?.setId(prop.id);
  return (
    <div
      onClick={handleClick}
      className="w-[300px] col-span-1 cursor-pointer hover:bg-gray-100 hover:shadow-2xl shadow bg-white rounded-md overflow-hidden "
    >
      <Image
        height={10}
        width={300}
        src={prop.image || "https://picsum.photos/id/1/200/300"}
        alt="name"
        className="max-h-72 min-w-full object-cover"
      />
      <div className="my-3 px-2">
        <h1 className="text-gray-900 text-2xl font-bold ">{prop.name}</h1>
        <h3 className="text-gray-600 text-base my-1">
          Date of Birth:{" "}
          <span className="text-gray-500">{prop.yearOfBirth}</span>
        </h3>
      </div>
    </div>
  );
}

export default Card;
