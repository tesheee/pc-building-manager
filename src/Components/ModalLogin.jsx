import React from "react";

function ModalLogin({state}) {
    return(
        <>
            <div className="modal active" onClick={state}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <h2>Вход или регистрация</h2>
                    <form>
                        <input type="tel" className="inputText" pattern="\+\d-\d{3}-\d{3}-\d{4}" placeholder="+7-555-333-2222"/>
                        <button className="green__button">Продолжить</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ModalLogin;