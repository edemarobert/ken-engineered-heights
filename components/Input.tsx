import React from "react";

const Input = ({...rest}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
  <input {...rest} className=" w-full bg-neutral-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300" />
)
}

export default Input