import React, {useState} from  'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';

import './style.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIndcident() {
    const [title, setTitle] =  useState('');
    const [description, setDescription] =  useState('');
    const [value, setValue] =  useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

   async function handleNweIncident(e) {
        e.preventDefault()

        const data = {
            title,
            description,
            value,
        }

        try {
          await  api.post('incidents', data,{
              headers: {
                  Authorization: ongId
              }
          });

          history.push('/profile');

        }catch(err) {
            alert("Aconteceu um erro ao cadastar, tente novamente")
        }
        
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                   <img src={logoImg} alt="Be The Hero"/>
                   <h1>Cadastrar novo caso</h1> 
                   <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                   <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                         Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNweIncident}>
                    <input 
                        placeholder="titulo do Caso"
                        value = {title}
                        onChange = {e => setTitle(e.target.value)}
                     />
                    <textarea  
                        placeholder="Descrição..."
                        value = {description}
                        onChange = {e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value = {value}
                        onChange = { e => setValue(e.target.value)}
                    />

                   
                    <button className="button"> Cadastrar</button>
                </form>
            </div>
        </div>
    )
}