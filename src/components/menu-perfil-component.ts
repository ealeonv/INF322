/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css, customElement, property, LitElement} from 'lit-element';
//import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store, RootState } from '../store.js';

//Reducers
import perfil from '../reducers/perfil.js';
import menu from '../reducers/menu.js';

store.addReducers({
  perfil,
  menu
});

// These are the elements needed by this element.

import {verperfil} from '../actions/menu.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';


@customElement('menu-perfil-component')
export class MenuPerfilComponent extends connect(store)(LitElement){
  
  @property({type: Boolean})
  private _verperfil: boolean = false;

  @property({type: String})
  private _nombre = "";

  @property({type: String})
  private _contrasena = "";

  @property({type: String})
  private _image = "";

  static get styles() {
    return [
      SharedStyles,
      css`
      
      body{
        backgroud:#0D1E52;
      }

      ul, li {
        list-style:none;
        padding:0;
        margin:0;
      }
      a {text-decoration:none;}
      
      .profile-wrapper {
        width:200px;
        position:absolute;
        right: 40px; 
        margin:25px auto;
        z-index: 2;
      }
      .profile-wrapper::after {
        content: '';
        position: absolute;
        top: 20px;
        right: 10px;
        border-color: #333 transparent transparent;
        border-width: 6px;
        border-style: solid;
      }
      .profile-wrapper::before {
        content: '';
        position: absolute;
        top: 20px;
        right: 10px;
        border-color: #eee transparent transparent;
        border-width: 6px;
        border-style: solid;
      }
      .profile-wrapper:hover::after {
        border-color: #111 transparent transparent;	
      }
      
      .profile {
        padding:6px;
        border:1px solid #000;
        border-radius:3px;
        box-shadow:0 1px 0 #555 inset, 0 1px 7px #111;
        background:#0D1E52;
      }
      .profile:hover {
        cursor:pointer;
        background:#0D1E52;
      }
      .profile .name {
        font-size:12px;
        color:#fff;
        line-height:36px;
        margin-left:10px;
      }
      .profile .name:hover {
        color:#ffffff;
      }
      .profile img {
        width:35px;
        display:inline;
        float:left;
        border:1px solid #111;
        border-radius:50%;
        box-shadow:0 0 3px rgba(0, 0, 0, 0.5) inset;
      }
      
      /* hide menu */
      .menu {
        display:none;
        clear:both;
        margin:20px 0 0 0;
      }
      .menu li {
        font-size:12px;
        margin:0;
        padding: 10px 4px;
      }
      .menu li a {
        color:#ffffff;
      }
      .menu li:hover > a{
        color:#eee;
      }
      
      .menu li:hover{
        border-left: 1px solid #111;
        border-right: 1px solid #222;
        border-bottom: 1px solid #222;
        border-top: 1px solid #111;
        border-radius: 3px;
      }
      
      /* hover profile show menu */
      .profile:hover .menu {
        display:block;
      }

      
      .boton_personalizado{
        text-decoration: none;
        padding: 10px;
        font-weight: 600;
        font-size: 15px;
        color: #ffffff;
        background-color: #303f9f;
        border-radius: 6px;
        border: 1px solid #0D1E52;
      }
      .boton_personalizado:hover{
        color: #ffffff;
        background-color: #0D1E52;
      }


      .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        
      }
      
      /* Modal Content */
      .modal-content {
        background-color: #fefefe;
        margin: auto;
        height: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 60%;
      }

      .modal-content input[type=text], .modal-content input[type=password] {
        width: 90%;
        padding: 15px;
        margin: 5px 0 22px 0;
        border: none;
        background: #f1f1f1;
      }
      
      
      /* When the inputs get focus, do something */
      .modal-content input[type=text]:focus, .modal-content input[type=password]:focus {
        background-color: #ddd;
        outline: none;
      }
      
      /* The Close Button */
      .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      
      .close:hover,
      .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }
      div.center {
        text-align: center;
      }
      `
    ];
  }

  protected render() {  
    return html`
    <body style="background-color:grey;">
    <div class="center">
    <div id="myForm" class="modal">
      <div class="modal-content">
                          
      <span class="close" @click="${this._closePWX}">&times;</span>
      <h1><strong>Acceso Datos Personales</strong></h1>
      <br>

      <label for="psw1"><b>Ingrese Contraseña</b></label>
      <input type="password" placeholder="Contraseña" id="pw1" name="psw1" required>
    
      <button class="boton_personalizado" @click="${this._closePW}">Confirmar</button>
                            
      </div>
    </div>
    </div>

    <ul class="profile-wrapper">
			<li>
				<!-- user profile -->
				<div class="profile">
					<img src=${this._image} />
					<a class="name">${this._nombre}</a>
					
					<!-- more menu -->
					<ul class="menu">
						<li @click="${this._fichaPersonal}"><a href="#">Ficha Personal</a></li>
						<li><a href="#">Plan Académico</a></li>
						<li><a href="#">Becas</a></li>
            <li><a href="#">Deuda</a></li>
            <li><a href="#">Consulta de Pagarés</a></li>
            <li><a href="#">Cerrar Sesión </a></li>
					</ul>
				</div>
			</li>
    </ul>
    </body>
    `;
  }

  private _fichaPersonal () {
    if(this._verperfil==false){
      (this.shadowRoot!.getElementById("myForm") as HTMLInputElement).style.display = "block";  
    }
  }

  private _closePWX(){
    (this.shadowRoot!.getElementById("myForm") as HTMLInputElement).style.display = "none";
  }

  private _closePW(){
      if((this.shadowRoot!.getElementById('pw1')! as HTMLInputElement).value==this._contrasena){
        this._verperfil = true;
        store.dispatch(verperfil(this._verperfil));
        (this.shadowRoot!.getElementById("myForm") as HTMLInputElement).style.display = "none";
      }else{
        alert("Contraseña Incorrecta");
      }
  }
  
  stateChanged(state: RootState) {
    this._nombre = state.perfil!.nombre;
    this._contrasena = state.perfil!.contrasena;
    this._image = state.perfil!.imagen;
    this._verperfil = state.menu!.verperfil;
  }
  
}