/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { Action, ActionCreator } from 'redux';
export const ACTUALIZAR = 'ACTUALIZAR';
export const ACTUALIZAR2 = 'ACTUALIZAR2';

export interface PerfilActionActualizar extends Action<'ACTUALIZAR'> {pasaporte: string, celular: string};
  
export interface PerfilActionActualizar2 extends Action<'ACTUALIZAR2'> {direccion: string, comuna: string, telefono: string, region: string};

export type PerfilAction = PerfilActionActualizar | PerfilActionActualizar2;

export const actualizar: ActionCreator<PerfilActionActualizar> = (pasaporte: string, celular: string) => {
  return {
    type: ACTUALIZAR,
    pasaporte,
    celular
  };
};

export const actualizar2: ActionCreator<PerfilActionActualizar2> = (direccion: string, comuna: string,
   telefono: string, region: string) => {
  return {
    type: ACTUALIZAR2,
    direccion,
    comuna,
    telefono,
    region
  };
};