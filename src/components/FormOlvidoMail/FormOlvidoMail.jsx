import React, { useState } from "react";


export default function FormOlvidoMail() {

    const [email, setEmail]=useState('');
  
  
    const cambioemail = (e) => {
      setEmail(e.target.value);
      console.log(e.target.value);
    }

    const validardatos = (e) => {
      alert('Un email ha sido enviado a su correo');
    }
  
  
    return (
      <div>
        <div className="fadeInDown">
          <div id="formContent">
            {/* Tabs Titles */}
            {/* Icon */}
          
  
            <div style={{backgroundColor: 'rgba(229,190,1,0.5)', color: '#e5be01'}}>
                <div>
                  <img
                  src='dist/img/exito.png'
                  id="icon"
                  alt="User Icon"
                  width= '25%' 
                  height='25%'
                 />
              </div>
           </div>
            {/* Login Form */}
            <form  onSubmit={validardatos}>
              <input
                type="text"
                id="email"
                className="fadeIn second"
                name="emial"
                id="email"
                placeholder="email"
                value={email}
                onChange={cambioemail}
                required
              />

              <input
                type="submit"
                value="Restablecer"
                className="fadeIn fourth"
                defaultValue="Log In"
              />
            </form>
            {/* Remind Passowrd */}
            <div id="formFooter">

            </div>
          </div>
        </div>
      </div>
    );
  }