//  importar librerias
import React, { useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

import './style.css';
// importing other components

// main
const Loginn = () => {

    let history = useHistory();
    const [cookies, setCookie] = useCookies(['MY_TOKEN']);
    const [user, setUser] = React.useState({
        username: "pattty",
        password: 123456
    })

    useEffect(()=> {
        if(hastoken()){
            redirectToCities()
        }
    }, [])
    const redirectToCities = () =>{
        history.push('/cities')
    }

    const login = () => {
        axios.post("http://localhost:3000/auth/login", user)
            .then(response => {
                let token = response.data.access_token
                setCookie('MY_TOKEN', token);
                redirectToCities()
            }).catch(err => {
                console.log(err)
            })
    }

    const updateUsername = (event) => {
        let value = event.target.value
        setUser({
            ...user,// usernamee: ptty,pasword: '12356'
            username: value
        })
    }

    const updatePassword = (event) => {
        let value = event.target.value
        // setUser({
        //     ...user,// usernamee: ptty,pasword: '12356'
        //     password: value
        // })
        const nuevoUser = {
            username: user.username,
            password: value
        }
        setUser(nuevoUser)
    }
    const hastoken = () => {
        let myCookie = cookies['MY_TOKEN']
        return myCookie != '' && myCookie != null
    }

    return (
        hastoken() ? <span> You ARe logged </span> :
            <div className="login-container">
                {/* <input style={{backgroundColor: '#3b5998', display: 'block'}} type="text" value={user.username} /> */}
                <input className="input" onChange={updateUsername} type="text" value={user.username} />
                <input className="input" onChange={updatePassword} type="password" value={user.password} />
                <button onClick={() => login()} className="btn">Login</button>
            </div>

    )
}

export default Loginn;