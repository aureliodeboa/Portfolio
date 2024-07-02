import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
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
    const { t } = useTranslation();
  
    return (
      <div className="flex flex-col h-full w-full md:w-1/2 justify-between text-justify py-4  	 dark:text-white text-black">
         
        <form className="form flex flex-col h-full gap-4 content-center  " onSubmit={handleSendEmail}>
          <input 
            className="input h-14 p-4 focus:outline-none  dark:focus:border-white  focus:border-yellow-500  rounded-md bg-white dark:bg-[#101012] border-[#353434] border-[2px]"
            type="text"
            placeholder={t("contact.form.name")}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          
          <input 
            className="input input h-14 p-4 focus:outline-none  dark:focus:border-white  focus:border-yellow-500  rounded-md bg-white dark:bg-[#101012] border-[#353434] border-[2px]"
            type="text"
            placeholder={t("contact.form.email")}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
  
          <textarea 
            className="textarea input h-[100%] p-4 focus:outline-none  dark:focus:border-white  focus:border-yellow-500  rounded-md bg-white dark:bg-[#101012] border-[#353434] border-[2px] resize-none  "
            placeholder={t("contact.form.message")}
            onChange={(e) => setMessage(e.target.value)}
            value={message}

          />
  
          <input className="button cursor-pointer p-4 rounded-md bg-[black] text-white dark:bg-[#ffffff] dark:text-black font-bold" type="submit" value="Enviar"  />
        </form>
  
      </div>
    );
}