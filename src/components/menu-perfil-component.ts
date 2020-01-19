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
        color:#555;
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
      `
    ];
  }

  protected render() {  
    return html`
    <body style="background-color:grey;">
    <ul class="profile-wrapper">
			<li>
				<!-- user profile -->
				<div class="profile">
					<img src=${this._image} />
					<a class="name">${this._nombre}</a>
					
					<!-- more menu -->
					<ul class="menu">
						<li><a href="#" @click="${this._fichaPersonal}">Ficha Personal</a></li>
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
    this._verperfil = true;
    store.dispatch(verperfil(this._verperfil));
  }
  
  stateChanged(state: RootState) {
    this._nombre = state.perfil!.nombre;
    this._image = state.perfil!.imagen;
    this._verperfil = state.menu!.verperfil;
  }
  
}