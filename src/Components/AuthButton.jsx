import React, {useState} from "react";
import ModalLogin from "./ModalLogin";

function AuthButton(){
    const [modalActive, setModalActive] = useState(false);

    return(
        <>
            <button className="autorization-button" onClick={() => setModalActive(!modalActive)}>Авторизоваться</button>
            {modalActive && <ModalLogin state={() => setModalActive(!modalActive)}/>}
        </>
    )
}

export default AuthButton;