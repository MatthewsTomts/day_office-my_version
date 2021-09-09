import { useHistory } from 'react-router-dom'

import { firebase, auth } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
//import teamsIconImg from '../assets/images/teamsIcon.png'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'
import '../styles/auth.scss'

export function Home() {
    const history = useHistory();

    function handleAgendamento() {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(function (result) {
            console.log(result);
        })

        history.push('/agendamento')
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={ illustrationImg } alt="Ilustração Fcamara" />
                <strong>Faça seu agendamento agora.</strong>
                <p>Marque um horário para comparecer na Fcamara.</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={ logoImg } alt="Fcamara" />
                    <button className="logar-teams">
                        <img src="" alt="" /> 
                        Registrar-se com o Teams
                    </button>
                    <button onClick={ handleAgendamento } className="logar-google">
                        <img src={ googleIconImg } alt="" />
                        Registrar-se com o Google
                    </button>
                    <div className="separator"> ou faça o login </div>
                    <form>
                        <input
                            type="text"
                            placeholder="E-mail"
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                        />
                        <Button  type="submit">
                            Login
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}