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
import { VERPERFIL, MenuAction} from '../actions/menu.js';
//import { RootAction } from '../store.js';


export interface MenuState {
  verperfil: boolean;
}

const INITIAL_STATE: MenuState = {
  verperfil: false
};

const perfil: Reducer<MenuState, MenuAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VERPERFIL:
      return {
        ...state,
        verperfil: action.per
      };
    default:
      return state;
  }
};

export default perfil;
