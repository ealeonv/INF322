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

store.addReducers({
  perfil,
});

// These are the elements needed by this element.


// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { actualizar } from '../actions/perfil.js';
import { actualizar2 } from '../actions/perfil.js';


@customElement('perfil-component')
export class PerfilComponent extends connect(store)(LitElement){

  @property({type: Boolean})
  private _panel1: boolean = true;
  @property({type: Boolean})
  private _panel2: boolean = false;
  @property({type: Boolean})
  private _panel3: boolean = false;
  @property({type: Boolean})
  private _panel4: boolean = false;
  @property({type: Boolean})
  private _panel5: boolean = false;

  //Datos personales
  @property({type: String})
  private _nombre = "";
  private _image = "";
  private _rut = "";
  private _email = "";
  private _fechaNacimiento = "";
  private _nacionalidad = "";
  private _pasaporte = "";
  private _celular = "";
  //Datos apoderado
  private _nombreApoderado= "";
  private _rutApoderado= "";
  //Datos dirección grupo familiar
  private _direccionFamiliar= "";
  private _comunaFamiliar= "";
  private _telefonoFamiliar= "";
  private _regionFamiliar= "";
  //Datos dirección periodo academico
  private _direccion= "";
  private _comuna= "";
  private _telefono= "";
  private _region= "";
  //Datos academicos
  private _carrera="";
  private _situacionAcademica="";
  private _prioridad="";
  private _matricula="";
  private _ingreso="";
  private _estado="";
  private _rol="";
  private _ingresoAno="";
  private _planCarrera="";
  private _situacionFinanciera="";
  private _fechaArancel="";
  
  

  static get styles() {
    return [
      SharedStyles,
      css`

      .scrollable2 {
        height: 600px; 
        overflow-y: auto;
        scrollbar-width: none;
      }

      .block1 { 
        background-color: #FDDD92; 
        padding: 10px;
        border-radius: 11px 11px 11px 11px;
        -moz-border-radius: 11px 11px 11px 11px;
        -webkit-border-radius: 11px 11px 11px 11px;
        border: 1px solid #000000;
      }

      .block2 {
        background-color: #FABA25; 
        padding: 10px;
        border-radius: 11px 11px 11px 11px;
        -moz-border-radius: 11px 11px 11px 11px;
        -webkit-border-radius: 11px 11px 11px 11px;
        border: 1px solid #000000;
      }

      .list-group {
        font-size: 14px;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 0px;
        margin-right: 0px;
        border: 1px solid #000000;
      }

      hr.myhrline{
        margin-top: 0;
        margin-bottom: 0px;
        background: 
      }

      .img-top{
        margin-top: 30px;
      }
      
      .btn-cambiar {
        font-family: 'Arial';
        font-size: 17px;;
        margin: 0px;
        background-color: inherit;
        cursor: pointer;
        display: inline-block;
        color: #ffffff;
        border: none;
      }

      .btn-cambiar:hover{
        background: #eee;
        color: #1a1a1a;
      }

      .btn-style {
        font-family: 'Arial';
        font-size: 18px;;
        margin: 10px;
        background-color: inherit;
        cursor: pointer;
        display: inline-block;
        color: #ffffff;
        border: none;
      }

      .btn-style:hover{
        background: #ffffff;
        color: #FABA25;
      }

      #panel1, .flip {
        font-size: 16px;
        padding: 10px;
        text-align: center;
        background-color: #4CAF50;
        color: white;
        border: solid 1px #a6d8a8;
        margin: auto;
      }
      
      #panel1 {
        display: none;
      }

      #logInButton {
        cursor: pointer;
        border: 1px solid gray;
        border-radius: 4px;
        padding: 5px;
        background: aliceblue;
      }

      #logInButton:hover {
        background: aqua;
      }

      .list-group-item {
        padding: 6px;
      }

      .value{
        color:#0066ff;
      }
      .editable:target{
        readonly: false;
      }

      .panel panel-default{
        border-radius: 11px 11px 11px 11px;
        -moz-border-radius: 11px 11px 11px 11px;
        -webkit-border-radius: 11px 11px 11px 11px;
        border: 2px solid #000000;
      }

      `
    ];
  }

  //Funciones para Mostrar/Ocultar los paneles
  _logIn1 () {
    if(this._panel1 == false)
    { 
      this._panel1 = true;
      this._panel2 = false;
      this._panel3 = false;
      this._panel4 = false;
      this._panel5 = false;

    }
  }

  _logIn2 () {
    if(this._panel2 == false)
    { 

      this._panel1 = false;
      this._panel2 = true;
      this._panel3 = false;
      this._panel4 = false;
      this._panel5 = false;
    }
  }
  _logIn3 () {
    if(this._panel3 == false)
    { 
      this._panel1 = false;
      this._panel2 = false;
      this._panel3 = true;
      this._panel4 = false;
      this._panel5 = false;
    }
  }
  _logIn4 () {
    if(this._panel4 == false)
    { 
      this._panel1 = false;
      this._panel2 = false;
      this._panel3 = false;
      this._panel4 = true;
      this._panel5 = false;
    }
  }
  _logIn5 () {
    if(this._panel5 == false)
    { 
      this._panel1 = false;
      this._panel2 = false;
      this._panel3 = false;
      this._panel4 = false;
      this._panel5 = true;
    }
  }

  protected render() {  
    return html`
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

</script>
<!------ Include the above in your HEAD tag ---------->




<!-- nav bar -->
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">


<body>
  <div class="scrollable2">
    <div class="container"> 
        <!-- resumt -->
              <div class="panel panel-default">
                <div class="block2">
                <button type="button" class="btn-style" @click="${this._logIn1}"><i class="fa fa-shield fa-rotate-270"></i> Datos personales</button>
                <hr class="myhrline"/>
                </div>
                ${this._panel1 ? html`
                <div class="block1">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="col-xs-12 col-sm-3">
                           <ul class="list-group">
                              <li class="list-group-item"><b>Nombre completo</b></li>
                              <li class="list-group-item"><b>R.U.T.</b></li>
                              <li class="list-group-item"><b>Fecha de nacimiento</b></li>
                              <li class="list-group-item"><b>Nacionalidad</b></li>
                              <li class="list-group-item"><b>Email</b></li>
                              <li class="list-group-item"><b>Celular</b></li>
                              <li class="list-group-item"><b>Pasaporte</b></li>
                           </ul>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                           <ul class="list-group">
                              <li class="list-group-item value"><b>: ${this._nombre}</b></li>
                              <li class="list-group-item value"><b>: ${this._rut}</b></li>
                              <li class="list-group-item value"><b>: ${this._fechaNacimiento}</b></li>
                              <li class="list-group-item value"><b>: ${this._nacionalidad}</b></li>
                              <li class="list-group-item value"><b>: ${this._email}</b></li>
                              <li class="list-group-item" style="padding: 3px">: 9 <input id ="celular" value = ${this._celular}></li>
                              <li class="list-group-item" style="padding: 3px">: <input id="pasaporte" class="editable" value = ${this._pasaporte} autocomplete="on" pattern="[0-9]*" maxlength="12" required></li>
                           </ul>
                        </div>
                        <div class="col-xs-12 col-sm-2">
                        </div>
                        <div class="col-xs-12 col-sm-3">
                          <div class='img-top'>
                           <figure>
                              <img class="img-circle img-responsive" alt="" src=${this._image}>
                           </figure>
                          </div>
                          <button type="button" class="btn-style" align="right" @click="${this._actualizar1}"><i class="fa fa-save"></i> Actualizar Datos</button>   
                        </div>
                      </div>
                    </div>
                  </div>  
                      `: html` 
                      `}
              </div>
                <div class="panel panel-default">
                  <div class="block2">
                  <button type="button" class="btn-style" @click="${this._logIn2}"><i class="fa fa-shield fa-rotate-270"></i> Datos del apoderado</button>
                  <hr class="myhrline"/>
                  </div>
                  ${this._panel2 ? html`
                <div class="block1">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="col-xs-12 col-sm-3">
                           <ul class="list-group">
                              <li class="list-group-item"><b>Nombre completo</b></li>
                              <li class="list-group-item"><b>R.U.T.</b></li>
                           </ul>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                           <ul class="list-group">
                              <li class="list-group-item value"><b>: ${this._nombreApoderado}</b></li>
                              <li class="list-group-item value"><b>: ${this._rutApoderado}</b></li>
                           </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                    `: html` 
                    `}
                </div>
              <div class="panel panel-default">
                <div class="block2">
                <button type="button" class="btn-style" @click="${this._logIn3}"><i class="fa fa-shield fa-rotate-270"></i> Dirección del grupo familiar</button>
                  <hr class="myhrline"/>
                  </div>
                  ${this._panel3 ? html`
                  
                <div class="block1">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="col-xs-12 col-sm-3">
                            <ul class="list-group">
                               <li class="list-group-item"><b>Región</b></li>
                               <li class="list-group-item"><b>Comuna</b></li>
                               <li class="list-group-item"><b>Dirección</b></li>
                               <li class="list-group-item"><b>Télefono</b></li>
                            </ul>
                      </div>
                      <div class="col-xs-12 col-sm-6">
                            <ul class="list-group">
                               <li class="list-group-item value"><b>: ${this._regionFamiliar}</b></li>
                               <li class="list-group-item value"><b>: ${this._comunaFamiliar}</b></li>
                               <li class="list-group-item value"><b>: ${this._direccionFamiliar}</b></li>
                               <li class="list-group-item value"><b>: ${this._telefonoFamiliar}</b></li>
                            </ul>
                      </div>
                    </div>
                  </div>
                  </div>
                  `: html` 
                  `}
              </div>
              <div class="panel panel-default">
                <div class="block2">
                <button type="button" class="btn-style" @click="${this._logIn4}"><i class="fa fa-shield fa-rotate-270"></i> Dirección del periodo académico</button>
                <hr class="myhrline"/>
                </div>
                ${this._panel4 ? html`
                <div class="block1">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="col-xs-12 col-sm-3">
                            <ul class="list-group">
                              <li class="list-group-item"><b>Región</b></li>
                              <li class="list-group-item"><b>Comuna</b></li>
                              <li class="list-group-item"><b>Dirección</b></li>
                              <li class="list-group-item"><b>Télefono</b></li>
                            </ul>
                      </div>
                      <div class="col-xs-12 col-sm-6">
                            <ul class="list-group">
                              <li class="list-group-item" style="padding: 3px">: <input id="direccion" class="editable" value = ${this._region} autocomplete="on" maxlength="20" required></li>
                              <li class="list-group-item" style="padding: 3px">: <input id="comuna" class="editable" value = ${this._comuna} autocomplete="on" maxlength="20" required></li>
                              <li class="list-group-item" style="padding: 3px">: <input id="region" class="editable" value = ${this._direccion} autocomplete="on" maxlength="20" required></li>
                              <li class="list-group-item" style="padding: 3px">:35 <input id="telefono" class="editable" value = ${this._telefono} autocomplete="on" pattern="[0-9]*" maxlength="20" required></li>
                            </ul>
                      </div>
                      <div class="col-xs-12 col-sm-3">
                      <button type="button" class="btn-style" style="margin-top: 150px;" align="right" @click="${this._actualizar2}"><i class="fa fa-save"></i> Actualizar Datos</button> 
                      </div>
                    </div>
                  </div>
                  </div>
                  `: html` 
                  `}
              </div>
              <div class="panel panel-default">
                <div class="block2">
                <button type="button" class="btn-style" @click="${this._logIn5}"><i class="fa fa-shield fa-rotate-270"></i> Datos Académicos</button>
                  <hr class="myhrline"/>
                  </div>
                  ${this._panel5 ? html`
                <div class="block1">
                  <div class='row'>
                    <div class="col-lg-12">
                      <div class="col-xs-12 col-sm-2">
                        <ul class="list-group">
                          <li class="list-group-item"><b>Carrera</b></li>
                          <li class="list-group-item"><b>Situación académica</b></li>
                          <li class="list-group-item"><b>Última prioridad</b></li>
                          <li class="list-group-item"><b>Última matrícula</b></li>
                          <li class="list-group-item"><b>Ingreso usm pregrado</b></li>
                          <li class="list-group-item"><b>Estado de carrera</b></li>
                        </ul>
                      </div>
                      <div class="col-xs-12 col-sm-4">
                        <ul class="list-group">
                          <li class="list-group-item value"><b>: ${this._carrera} </b></li>
                          <li class="list-group-item value"><b>: ${this._situacionAcademica} </b></li>
                          <li class="list-group-item value"><b>: ${this._prioridad} </b></li>
                          <li class="list-group-item value"><b>: ${this._matricula} </b></li>
                          <li class="list-group-item value"><b>: ${this._ingreso}</b></li>
                          <li class="list-group-item value"><b>: ${this._estado}</b></li>
                        </ul>
                      </div>
                      <div class="col-xs-12 col-sm-2">
                        <ul class="list-group">
                          <li class="list-group-item"><b>Rol usm</b></li>
                          <li class="list-group-item"><b>Año de ingreso</b></li>
                          <li class="list-group-item"><b>Plan de carrera</b></li>
                          <li class="list-group-item"><b>Situación financiera</b></li>
                          <li class="list-group-item"><b>Fecha arancel</b></li>
                        </ul>
                      </div>
                      <div class="col-xs-12 col-sm-4">
                        <ul class="list-group">
                          <li class="list-group-item value"><b>: ${this._rol} </b></li>
                          <li class="list-group-item value"><b>: ${this._ingresoAno} </b></li>
                          <li class="list-group-item value"><b>: ${this._planCarrera} </b></li>
                          <li class="list-group-item value"><b>: ${this._situacionFinanciera} </b></li>
                          <li class="list-group-item value"><b>: ${this._fechaArancel} </b></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  </div>
                  `: html` 
                  `}
                
              </div>
        <!-- resume -->
    </div>
  </div>
</body>

    `;
  }

  private _actualizar1() {
      this._celular=(this.shadowRoot!.getElementById('celular')! as HTMLInputElement).value;
      this._pasaporte=(this.shadowRoot!.getElementById('pasaporte')! as HTMLInputElement).value;
      store.dispatch(actualizar(this._pasaporte,this._celular));
  }
  private _actualizar2(){
    this._direccion=(this.shadowRoot!.getElementById('direccion')! as HTMLInputElement).value;
    this._comuna=(this.shadowRoot!.getElementById('comuna')! as HTMLInputElement).value;
    this._region=(this.shadowRoot!.getElementById('region')! as HTMLInputElement).value;
    this._telefono=(this.shadowRoot!.getElementById('telefono')! as HTMLInputElement).value;
    store.dispatch(actualizar2(this._direccion,this._comuna, this._telefono,this._region));
  }


  stateChanged(state: RootState) {
    this._nombre = state.perfil!.nombre;
    this._image = state.perfil!.imagen;
    this._rut = state.perfil!.rut;
    this._email = state.perfil!.email;
    this._fechaNacimiento =state.perfil!.fechaNacimiento;
    this._nacionalidad = state.perfil!.nacionalidad;
    this._pasaporte = state.perfil!.pasaporte;
    this._celular=state.perfil!.celular;

    this._nombreApoderado = state.perfil!.nombreApoderado;
    this._rutApoderado=state.perfil!.rutApoderado;
    
    this._direccionFamiliar = state.perfil!.direccionFamiliar;
    this._comunaFamiliar = state.perfil!.comunaFamiliar;
    this._telefonoFamiliar = state.perfil!.telefonoFamiliar;
    this._regionFamiliar = state.perfil!.regionFamiliar;
    
    this._direccion = state.perfil!.direccion;
    this._comuna = state.perfil!.comuna;
    this._telefono = state.perfil!.telefono;
    this._region = state.perfil!.region;

    this._carrera = state.perfil!.carrera;
    this._situacionAcademica = state.perfil!.situacionAcademica;
    this._prioridad = state.perfil!.prioridad;
    this._matricula = state.perfil!.matricula;
    this._ingreso = state.perfil!.ingreso;
    this._estado = state.perfil!.estado;
    this._rol = state.perfil!.rol;
    this._ingresoAno = state.perfil!.ingresoAno;
    this._planCarrera = state.perfil!.planCarrera;
    this._situacionFinanciera = state.perfil!.situacionFinanciera;
    this._fechaArancel = state.perfil!.fechaArancel;
  }

}