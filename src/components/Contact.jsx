import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitDisabled, setisSubmitDisabled] = useState(true);

  const handleName = (e) => {
    // current value in name input
    let newName = e.target.value;
    setName(newName);
    validationForm(newName, age, email);
  };

  const handleAge = (e) => {
    let newAge = e.target.value;
    setAge(newAge);
    validationForm(name, newAge, email);
  };

  const handleEmail = (e) => {
    let newEmail = e.target.value;
    setEmail(newEmail);
    validationForm(name, age, newEmail);
  };

  const handleSubmit = (name, age, email, e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("Form submitted main:", { name, age, email });
    disabled(isSubmitDisabled);
  };

  const validationForm = (newName, newAge, newEmail) => {
    // checks whether the name is above 5 and within 15
    const nameValidation = newName.length > 5 && newName.length <= 15;

    // checks whether newAge is in email format or not
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);

    // checks whether age is empty and a number
    const ageValidation = newAge !== "" && !isNaN(newAge);

    // based on validation button is enabled/disabled
    setisSubmitDisabled(!(nameValidation && ageValidation && emailValidation));
  };
  return (
    <div className=" h-full w-full">
      <div className="w-[30%] bg-blue-50 mx-auto p-10 mt-10">
        <form className="">
          {/* name */}
          <div className="py-4">
            <input
              placeholder="Enter your name.."
              className="p-2 border border-gray-200 cursor-pointer rounded-md w-full"
              type="text"
              value={name}
              onChange={handleName}
            />
            {}
          </div>
          {/* age */}
          <div className="py-4">
            <input
              placeholder="Enter your age.."
              className="p-2 border border-gray-200 cursor-pointer rounded-md w-full"
              type="text"
              value={age}
              onChange={handleAge}
            />
          </div>
          {/* email */}
          <div className="py-4">
            <input
              placeholder="Enter your email.."
              className="p-2 border border-gray-200 cursor-pointer rounded-md w-full"
              type="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="py-4">
            <button
              className="px-2 py-1 bg-blue-300 text-white w-full"
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
