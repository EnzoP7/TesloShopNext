"use client";
import React, { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

const QuantitySelector = ({ quantity }: Props) => {
  const [count, setcount] = useState(quantity);
  const onQuantityChanged = (value: number) => {
    if (count + value < 1) return;

    setcount(count + value);
  };

  return (
    <div className="flex">
      <button onClick={() => onQuantityChanged(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-100 text-center rounded">
        {count}
      </span>
      <button>
        <IoAddCircleOutline size={30} onClick={() => onQuantityChanged(+1)} />
      </button>
    </div>
  );
};

export default QuantitySelector;
