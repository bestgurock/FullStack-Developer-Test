import React, { useState } from "react";
import { Link } from "react-router-dom";

export function UploadProduct() {
  const [input, setInput] = useState("");
  console.log(input);
  const onChange = () => {};
  return (
    <div className="flex-col ">
      <h1 className="text-4xl">Upload Product</h1>
      <div>
        <ul>
          <li>
            <h1 className="text-3xl">Product Name</h1>
            <input
              value={input}
              onChange={(e: any) => setInput(e.target.value)}
              placeholder="Product Name"
              name="name"
              type="text"
              className="bg-gray-300 rounded"
            ></input>
          </li>
          <li>
            <h1 className="text-3xl">Code</h1>

            <input placeholder="Product Name" name="name" type="text" className="bg-gray-300 rounded"></input>
          </li>
          <li>
            <h1 className="text-3xl">Price</h1>

            <input placeholder="Product Name" name="name" type="text" className="bg-gray-300 rounded"></input>
          </li>
        </ul>
      </div>
      <br></br>
      <button
        className="flex justify-center bg-gray-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded "
        onClick={() => console.log("SUCESS")}
      >
        {/* {
          <Link to="/" className="text-4xl font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Submit
          </Link>
        } */}
        Clickme
      </button>
    </div>
  );
}
