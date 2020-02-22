/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { Reducer } from 'redux';

import { ACTUALIZAR, ACTUALIZARCONTRASENA } from '../actions/perfil.js';

import { RootAction } from '../store.js';
//import { RootAction } from '../store.js';


export interface PerfilState {
  nickmane:string;
  contrasena:string;

  //Datos personales Fijo
  nombre: string;
  imagen: string;
  rut: string;
  email: string;
  fechaNacimiento: string;
  nacionalidad: string;
  //Datos personales Variables
  pasaporte: string;
  celular: string;

  //Datos apoderado Fijo
  nombreApoderado: string;
  rutApoderado: string;

  //Direccion del grupo familiar Fijo
  direccionFamiliar: string;
  comunaFamiliar: string;
  telefonoFamiliar: string;
  regionFamiliar: string;

  //Direccion del periodo academico Variable
  direccion: string;
  comuna: string;
  telefono: string;
  region: string;

  //Datos academico Fijo
  carrera:string;
  situacionAcademica:string;
  prioridad:string;
  matricula:string;
  ingreso:string;
  estado:string;
  rol:string;
  ingresoAno:string;
  planCarrera:string;
  situacionFinanciera:string;
  fechaArancel:string;

}

const INITIAL_STATE: PerfilState = {
  nickmane:"Felipe",
  contrasena:"123momiaes",

  //Datos personales Fijo
  nombre: "Felipe Encalada",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbsBSPWYZK6exsVL86MJuEIOxkWAdAYdxiOCjBCDXq3u2f9RkAw&s",
  rut: "21.305.354-4",
  email: "felipe.encalada@sansano.usm.cl",
  fechaNacimiento: "01/01/2020",
  nacionalidad: "Chilena",
  //Datos personales Variable
  pasaporte: "0",
  celular: "56704547",

  //Datos apoderado Fijo
  nombreApoderado: "Jorge Bobadilla",
  rutApoderado: "19.404.354-6",

  //Direccion del grupo familiar Fijo
  direccionFamiliar: "Calle siempre viva 123",
  comunaFamiliar: "Rancagua",
  telefonoFamiliar: "241500-03",
  regionFamiliar: "La patagonia",

  //Direccion del periodo academico Variable
  direccion: "12 norte 2507",
  comuna: "Viña del mar",
  telefono: "123",
  region: "Valparaíso",

  //Datos academico Fijo
  carrera:"Ing. Civil Informática, Casa Central Valparaíso (Diurno)",
  situacionAcademica:"Regular (13/10/2019)",
  prioridad:"3787.126 (2019-1)",
  matricula:"2019-2",
  ingreso:" 2020",
  estado:"Vigente",
  rol:"202073001-1",
  ingresoAno:"2020",
  planCarrera:"7313",
  situacionFinanciera:"Al día",
  fechaArancel:"01/01/2020"
};

const perfil: Reducer<PerfilState, RootAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTUALIZAR:
      return {
        ...state,
        //Datos personales Variable
        pasaporte: action.pasaporte,
        celular: action.celular,
      };
      case ACTUALIZARCONTRASENA:
        return{
          ...state,
          //Direccion del periodo academico Variable
          contrasena: action.contrasena
        };
    default:
      return state;
  }
};

export default perfil;
