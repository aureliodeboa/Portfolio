import { FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';

export const SendEmail = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSendEmail(e: FormEvent){
        e.preventDefault();

        if(name =='' || email =='' || message ==''){
            alert("Preencha o form")
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        }

        //colcar isso em um .env
        emailjs.send('service_5eqdn2d','template_3mkldbv',templateParams,'Knv2kPJay2MnevhWS')
        .then((response)=>{
            console.log("Email enviado", response.status, response.text);
            setName('');
            setEmail('');
            setMessage('');

        }, (error)=>{
            console.log("ERROR",error);
        })

    }
  
    return (
      <div className="container">
        <h1 className="title">Contato</h1>
  
        <form className="form" onSubmit={handleSendEmail}>
          <input 
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          
          <input 
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
  
          <textarea 
            className="textarea"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
  
          <input className="button" type="submit" value="Enviar" />
        </form>
  
      </div>
    );
}