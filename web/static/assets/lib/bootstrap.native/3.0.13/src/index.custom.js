// use npm run custom INPUTFILE:src/index.yourFILE.js,OUTPUTFILE:dist/bootstrap-native-yourFileName.js,MIN:false,FORMAT:umd

import initCallback from './util/initCallback.js'
// import removeDataAPI from './util/removeDataAPI.js'

import componentsInit from './util/componentsInit.js'
// import {Util} from './util/util.js'
import {version as Version} from './../package.json'
import { one } from 'shorter-js/src/event/one.js'

// import Alert from './components/alert-native.js'
// import Button from './components/button-native.js'
// import Carousel from './components/carousel-native.js'
// import Collapse from './components/collapse-native.js'
// import Dropdown from './components/dropdown-native.js'
// import Modal from './components/modal-native.js'
// import Popover from './components/popover-native.js'
// import ScrollSpy from './components/scrollspy-native.js'
// import Tab from './components/tab-native.js'
// import Toast from './components/toast-native.js'
// import Tooltip from './components/tooltip-native.js'

// componentsInit.Alert = [ Alert, '[data-dismiss="alert"]']
// componentsInit.Button = [ Button, '[data-toggle="buttons"]' ]
componentsInit.Carousel = [ Carousel, '[data-ride="carousel"]' ]
// componentsInit.Collapse = [ Collapse, '[data-toggle="collapse"]' ]
// componentsInit.Dropdown = [ Dropdown, '[data-toggle="dropdown"]']
// componentsInit.Modal = [ Modal, '[data-toggle="modal"]' ]
// componentsInit.Popover = [ Popover, '[data-toggle="popover"],[data-tip="popover"]' ]
// componentsInit.ScrollSpy = [ ScrollSpy, '[data-spy="scroll"]' ]
// componentsInit.Tab = [ Tab, '[data-toggle="tab"]' ]
// componentsInit.Toast = [ Toast, '[data-dismiss="toast"]' ]
// componentsInit.Tooltip = [ Tooltip, '[data-toggle="tooltip"],[data-tip="tooltip"]' ]

// bulk initialize all components
document.body ? initCallback() : one( document, 'DOMContentLoaded', initCallback );

export default {
  // Alert,
  // Button,
  Carousel,
  // Collapse,
  // Dropdown,
  // Modal,
  // Popover,
  // ScrollSpy,
  // Tab,
  // Toast,
  // Tooltip,

  // initCallback,
  // removeDataAPI,
  // componentsInit,
  // Util,
  Version
}