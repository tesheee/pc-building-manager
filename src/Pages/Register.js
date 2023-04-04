import React from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [product, setProduct] = React.useState();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/users`);
        setProduct(data);
      } catch (error) {
        alert(error);
      }
    }

    fetchProduct();
  }, []);

  React.useEffect(() => {
    console.log(email);
    console.log(pass);
  }, [email, pass]);

  async function makePost() {
    if (email != "" && pass != "")
      try {
        await axios.post("http://localhost:5000/api/registration", {
          email: `${email}`,
          password: `${pass}`,
        });
      } catch (error) {
        alert(error);
      }
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePass = (event) => {
    setPass(event.target.value);
  };

  return (
    <div className="container">
      <div>
        <br />
        <div className="inputbox">
          <input
            value={email}
            onChange={onChangeEmail}
            required="required"
            type="text"
          />
          <span>Email</span>
          <i></i>
        </div>
        <br />
        <div className="inputbox">
          <input
            value={pass}
            onChange={onChangePass}
            required="required"
            type="text"
          />
          <span>Пароль</span>
          <i></i>
        </div>
      </div>
      <button onClick={() => makePost()}>Отправить</button>
    </div>
  );
}

export default Register;
