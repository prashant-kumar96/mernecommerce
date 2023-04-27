import Form from "../Components/Forms";

const SignUp = () => {
  const inputdata = [
    {
      type: "text",
      placeholder: "name",
      name: "username",
      state: "username",
    },
    {
      type: "email",
      placeholder: "email",
      name: "email",
      state: "email",
    },
    {
      type: "password",
      placeholder: "password",
      name: "password",
      state: "password",
    },
  ];

  const buttondata = {
    type: "button",
    text: "Register",
  };

  return (
    <div>
      <Form
        heading={"Register"}
        inputdata={inputdata}
        buttondata={buttondata}
      />
    </div>
  );
};

export default SignUp;
