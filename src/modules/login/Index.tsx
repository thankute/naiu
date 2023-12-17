import { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isWrong, setIsWrong] = useState<boolean>(false);

    const navigate = useNavigate();

    const onSubmit = () => {
        console.log("username", username);
        console.log("password", password);
        if(username === "nathanhiuiu" && password === "26012023") {
            localStorage.setItem("accessToken", "true");
            navigate('/home');
        } else {
            setIsWrong(true);
        }
    }

    return (
        <div className='login'>
            <div className="login-container">
                <h2 style={{ textAlign: "center"}}>Nơi tình iu bắt đầu</h2>
                <div className="form">
                    <input 
                        className={ isWrong ? 'wrong' : ''} 
                        type="text" 
                        placeholder='Nhập tên iuiu nàooo' 
                        onChange={(e) => {
                            setUsername(e.target.value)
                            setIsWrong(false);
                        }}    
                    />
                    <input 
                        className={isWrong ? 'wrong' : ''} 
                        type="password" 
                        placeholder='Mật khẩu gì ta?' 
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setIsWrong(false);
                        }}  
                    />
                    { isWrong ? <>
                        <span style={{ color: "red", textAlign: "center" }}>Ngươi là ai? Khum phải người iu tui???</span>
                    </> : <></>}
                    <button type='button' className='login-btn' onClick={onSubmit}>Bắt đầu thuiiii</button>
                </div>
            </div>
        </div>
    )
}

export default Login