import React from 'react'
import './Contact.css';
import Swal from 'sweetalert2'

const Contact = () => {
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      formData.append("access_key", "28fa39f0-e98b-44bf-99cd-029c7528e926");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "¡Exitoso!",
          text: "Tu mensaje ha sido enviado!",
          icon: "success"
        });
      }
    };



  return (
    <div>
      <section className='contact  dark:bg-gray-900 dark:text-white'>
        <form onSubmit={onSubmit}>
            <h2>Contacto</h2>
            <div className='input-box'>
                <label htmlFor="">Apellidos y Nombres</label>
                <input type="text" className='field' placeholder='ingresa tu nombre' name='name' required />
            </div>
            <div className='input-box'>
                <label htmlFor="">Correo Electrónico</label>
                <input type="email" className='field' placeholder='ingresa tu email' name='email' required />
            </div>
            <div className='input-box'>
                <label htmlFor="">Mensaje</label>
                <textarea name="message" className='field mess' placeholder='ingresa tu mensaje' required></textarea>
            </div>
            <button type='submit'>Enviar Mensaje</button>
        </form>

      </section>
    </div>
  )
}

export default Contact
