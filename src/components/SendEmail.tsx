import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";

export const SendEmail = () =>{
    const { t } = useTranslation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSendEmail(e: FormEvent){
        e.preventDefault();

        if(name =='' || email =='' || message ==''){
            alert(t("contact.form.validation"))
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
      <div className="flex flex-col h-full w-full md:w-1/2 justify-between text-justify py-4 dark:text-white text-black">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{t("contact.form.title")}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{t("contact.form.description")}</p>
        </div>
         
        <form className="form flex flex-col h-full gap-6 content-center" onSubmit={handleSendEmail}>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input 
              className="input w-full h-14 pl-12 pr-4 focus:outline-none dark:focus:border-white focus:border-yellow-500 rounded-lg bg-white dark:bg-[#101012] border-[#353434] border-[2px] transition-all duration-300 hover:border-yellow-400"
              type="text"
              placeholder={t("contact.form.name")}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input 
              className="input w-full h-14 pl-12 pr-4 focus:outline-none dark:focus:border-white focus:border-yellow-500 rounded-lg bg-white dark:bg-[#101012] border-[#353434] border-[2px] transition-all duration-300 hover:border-yellow-400"
              type="email"
              placeholder={t("contact.form.email")}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
  
          <div className="relative">
            <LuMessageSquare className="absolute left-4 top-6 text-gray-400 text-sm" />
            <textarea 
              className="textarea w-full h-[200px] pl-12 pr-4 pt-6 focus:outline-none dark:focus:border-white focus:border-yellow-500 rounded-lg bg-white dark:bg-[#101012] border-[#353434] border-[2px] resize-none transition-all duration-300 hover:border-yellow-400"
              placeholder={t("contact.form.message")}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
  
          <button 
            className="button group flex items-center justify-center gap-3 cursor-pointer p-4 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold transition-all duration-300 hover:from-yellow-500 hover:to-orange-600 hover:shadow-lg hover:scale-105" 
            type="submit"
          >
            <HiOutlinePaperAirplane className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
            {t("contact.form.button")}
          </button>
        </form>
  
      </div>
    );
}