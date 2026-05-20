import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    username: "",
    fullName: ""
  });


let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((curreData) => {
        curreData[fieldName] = newValue;
        return {...curreData}
    });
};

  return (
    <div className="py-2 px-4 bg-orange-500 w-60 h-70 m-auto mt-16">
      <form action="#">
        <label className="text-black text-lg" htmlFor="fullName">Full name</label>
        <input
          value={formData.userName}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter full name"
          id="fullName"
          name="fullName"
          className="bg-black border-0 outline-0 p-1"
        />
        <br />
        <br />
        <label className="text-black text-lg" htmlFor="username">username:</label>
        <input 
           type="text" 
           value={formData.fullname}
           placeholder="Enter user name" 
           id="username" 
           name="username"
           onChange={handleInputChange}
           className="bg-black border-0 outline-0 p-1"
           />

        <br />
        <button className="mt-3 py-1 px-2 bg-orange-900 text-white">Submit</button>
      </form>
    </div>
  );
}
