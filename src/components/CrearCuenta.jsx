import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import '../styles/CrearCuenta.css'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';


const CrearCuenta = () => {
   
    const {register, errors, handleSubmit} = useForm();
    const history = useHistory()

    const saveLocalStorage = localStorage.getItem("cuenta")
    let parsetodos

    if (!saveLocalStorage) {
        localStorage.setItem("cuenta", JSON.stringify([]) )
        parsetodos = []
    }else{
       parsetodos = JSON.parse(saveLocalStorage)
    }

    const [traer, settraer] = useState(parsetodos);
    

    const onSubmit = (newtodos) => {
        history.push("/usuario-registrado")


        const nameLocalStorage = JSON.stringify(newtodos)
        localStorage.setItem('cuenta', nameLocalStorage )
        settraer(newtodos)



        


       

    }

    

   


    return (
<Fragment>
<div className="container-title">
<h2 className="h2-account">Completa tus datos</h2>
<Link  className="a-account" to="/#">Crear una cuenta de empresa</Link>
</div>

<form onSubmit={handleSubmit(onSubmit)}>
<section className="create-account">
        <div className="container-nombre">
        <p>Nombre</p>
        <input className="input-form"type="text"   placeholder="Ingrese nombre de usuario" id='nombre'name="nombre"
        ref={register({ required: { value: true,  message: 'Nombre es requerido' }, 
        maxLength: {value: 10, message: 'Maximo 10 carácteres!'},
        minLength: {value: 2,  message: 'Mínimo 2 carácteres' },
        pattern: {value:/^[A-Za-z]+$/i, message: 'no se aceptan numeros' }})}/>
        <span className="errors">
        {errors.nombre && errors.nombre.message}
        </span>
    </div>

    <div className="container-apellido">
        <p>Apellido</p>
        <input className="input-form" type="text" placeholder="Ingrese apellido de usuario" name="apellido" 
         ref={register({ required: { value: true,  message: 'Apellido es requerido' }, 
         maxLength: {value: 10, message: 'Maximo 20 carácteres!'},
         minLength: {value: 2,  message: 'Mínimo 2 carácteres' },
         pattern: {value:/^[A-Za-z]+$/i, message: 'No se aceptan numeros' }})}/>
         <span className="errors">
         {errors.apellido && errors.apellido.message}
         </span>    
    </div>
    
    <div  className="container-email">
        <p>Email</p>
        <input className="input-form" type="email" placeholder="Ingrese email de usuario" name="email"  
         ref={register({ required: { value: true,  message: 'Email es requerido' }, 
         maxLength: {value: 30, message: 'Maximo 30 carácteres!'},
         minLength: {value: 10,  message: 'Mínimo 10 carácteres' },
         pattern: {value:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, message: 'No es un email valido' }})}/>
         <span className="errors">
         {errors.email && errors.email.message}
         </span>   
    </div>
   
    <div  className="container-clave">
        <p>Contraseña</p>
        <input className="input-form" type="password" placeholder="Ingrese contraseña de usuario" name="contraseña"  
         ref={register({ required: { value: true,  message: 'Contraseña requerida' }, 
         maxLength: {value: 20, message: 'Maximo 20 carácteres!'},
         minLength: {value: 4,  message: 'Mínimo 4 carácteres' },
         pattern: {value:/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,20}$/ , message: 'Su contraseña debe contener por lo menos 1 numero' }})}/>
         <span className="errors">
         {errors.contraseña && errors.contraseña.message}
         </span>   
    </div>
    
    <div  className="container-checkbox">
        <p className="a-checkbox">Declaro que soy mayor de edad, acepto los <Link to="/#">terminos y condiciones</Link> y autorizo el uso de mis datos de acuerdo al acuerdo a la <Link to="/#">Declaracion de privacidad</Link></p>
        <input className="checkbox" type="checkbox" name="checkbox"
        ref={register({ required: { value: true}, 
        })}/>
       
        
    </div>
    <div className="container-button">
    <button className="submit" type="submit">Save</button> 
    </div>
</section>
</form>

</Fragment>


    )
   
}

export default CrearCuenta
