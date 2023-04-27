import styles from "./Forms.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const { heading, inputdata, buttondata } = props;
  const navigate = useNavigate();
  let tempformdata = {};
  inputdata.map((value, index) => {
    tempformdata[value.state] = "";
  });

  const [formstate, setFormState] = useState(tempformdata);
  console.log(formstate);

  const handleRegister = async () => {
    console.log("hadnke regiuster is reun");
    const data = await axios.post(
      "http://localhost:5000/register",
      {
        name: formstate.username,
        email: formstate.email,
        password: formstate.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
    if (data.status) {
      navigate("/profile");
    }
  };
  return (
    <>
      <h1>{heading}</h1>
      <form className={styles.form}>
        {inputdata.map((value, index) => {
          return (
            <input
              type={value.types}
              key={String(index) + "input"}
              placeholder={value.placeholder}
              name={value.name}
              className={styles.inputs}
              value={tempformdata.name}
              onChange={(e) => {
                setFormState({ ...formstate, [value.state]: e.target.value });
              }}
            />
          );
        })}
        <button
          type={buttondata.type}
          className={styles.button}
          onClick={handleRegister}
        >
          {buttondata.text}
        </button>
      </form>
    </>
  );
};

export default Form;
