import { Link } from 'react-router-dom'

import { Button } from '../components/Button'
import '../styles/agendamento.scss'

export function Agendamento() {
  return (
      <div id="page-agendamento">
          <main>
                  <img src="" alt="Fcamara" />
                  <form>
                      <strong>Agendamento</strong>
                      <input className="inputs"
                        type="text"
                        placeholder="E-mail"
                      />
                      <input className="inputs"
                        type="date"
                      />
                      <input className="inputs"
                        type="time" 
                        min="08:00:00:00"
                        max="06:00:00:00"
                        required
                      />
                      <select className="inputs" placeholder="Selecione o Escritório">
                        <option value="0">São Paulo</option>
                        <option value="1">Santos</option>
                      </select>
                      <Button type="submit">
                          Login
                      </Button>
                  </form>
                  <p>Não quer fazer um agendamento? <Link to="/"> Então clique aqui e volte</Link></p>
          </main>
      </div>
  )
}