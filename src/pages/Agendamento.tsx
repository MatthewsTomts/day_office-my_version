import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'
import '../styles/agendamento.scss'

export function Agendamento() {
  const { user } = useAuth();
  const history = useHistory();

  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [estado, setEstado] = useState('');

  async function handleAgendamento(event: FormEvent) {
    event.preventDefault()

    if (data.trim() === '' && hora.trim() === '' && estado.trim() === '') {
      return;
    }

    const agenRef = database.ref('dayoffice-7f498-default-rtdb');

    const firebaseAgen = await agenRef.push({
      date: data,
      hour: hora,
      authorId: user?.id,
      estado: estado
    })

    //history.push(`/agendamento/confirmar`)
  }

  return (
      <div id="page-agendamento">
          <main>
                  <img src="" alt="Fcamara" />
                  <form onSubmit={handleAgendamento}>
                      <strong>Agendamento</strong>
                      <input className="inputs"
                        type="date"
                        onChange={event => setData(event.target.value)}
                      />
                      <input className="inputs"
                        type="time" 
                        min="08:00:00:00"
                        max="06:00:00:00"
                        onChange={event => setHora(event.target.value)}
                        required
                      />
                      <select className="inputs" placeholder="Selecione o Escritório" onChange={event => setEstado(event.target.value)}>
                        <option value="0">São Paulo</option>
                        <option value="1">Santos</option>
                      </select>
                      <Button type="submit">
                          Confirmar
                      </Button>
                  </form>
                  <p>Não quer fazer um agendamento? <Link to="/"> Então clique aqui e volte</Link></p>
          </main>
      </div>
  )
}