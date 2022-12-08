import { useState, React } from "react";

function ModalLogin({state, handleClick}) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return(
        <>
            <div className="modal active" onClick={state}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <h2>Вход или регистрация</h2>
                    <form>
                        <input type="email" className="inputText" placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" className="inputText" placeholder="Пароль" 
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}/>
                        <button className="green__button" onClick={()=>handleClick(email, pass)}>Продолжить</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ModalLogin;