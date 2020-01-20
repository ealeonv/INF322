/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css, property, PropertyValues, customElement } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store, RootState } from '../store.js';
import { customCss } from './style';
// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerState
} from '../actions/app.js';

import './menu-perfil-component';
import './perfil-component';
// The following line imports the type only - it will be removed by tsc so
// another import for app-drawer.js is required below.
// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import './snack-bar.js';

@customElement('main-page')
export class MainPage extends connect(store)(LitElement) {
  @property({type: Boolean})
  private _loggedIn: boolean = false;

  @property({type: String})
  private _page: string = '';

  private appTitle : string = 'Siga';

  @property({type: Boolean})
  private _verperfil: boolean = false;

  
  static get styles() {
    return [customCss,
      css`
        :host {
          display: block;
          height: 100vh;
        }

        #main {
          display: grid;
          height: 100%;
          grid-template-columns: 300px calc(100% - 300px);
          grid-template-rows: 100px calc(100% - 100px);
        }

        #header {
          grid-row: 1;
          grid-column: 1 / 3;
          background: #0D1E52;
        }

        #nav-bar {
          grid-row: 2;
          grid-column: 1;
          border: 1px dotted blue;
        }

        #content {
          grid-row: 2;
          grid-column: 2;
        }

        #full {
          grid-row: 2;
          grid-column: 1/3;
          
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

        .centered {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
      `
    ];
  }

  _logIn () {
    this._loggedIn = (Math.random() > .01);
    if (!this._loggedIn) {
        alert('try again!');
    }
  }

  protected render() {
    return html`
    ${this._loggedIn ? html`
    <div id="main">
        <div id="header">
          <menu-perfil-component></menu-perfil-component>
        </div>
        
        ${this._verperfil ? html`
        <div id="full" class="centered">
          <perfil-component></perfil-component>
        </div>
        ` : html `
        <div id="nav-bar"></div>
        <div id="content" class="centered">
          <h2>Hola mundo!</h2>
        </div>
        `}
    </div>
    ` : html`
    <div class="centered">
        <span id="logInButton" @click="${this._logIn}">
            Click here to try to log in!
        </span>
    </div>
    <!--home-component/-->`}
    `;
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  protected firstUpdated() {
    installRouter((location) => store.dispatch(navigate(decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        () => store.dispatch(updateDrawerState(false)));
  }

  protected updated(changedProps: PropertyValues) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
    }
  }

  stateChanged(state: RootState) {
    this._page = state.app!.page;
    this._verperfil = state.menu!.verperfil;
  }
}
