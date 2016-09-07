import AppDispatcher from '../dispatcher/AppDispatcher'
import { EventEmitter } from 'events';



class IntroStore extends EventEmitter {

  constructor(){
    super();
  }


  updatePlaceholder(values){
    this.placeholderText = values.newPlaceholder;
    this.emit('placeholder-changed');
  }


  actionsHandler(action){


    switch(action.actionType){

      case 'UPDATE_PLACEHOLDER':
        this.updatePlaceholder(action.values);
        break;

    }



  }

}

const introStore = new IntroStore;
AppDispatcher.register(introStore.actionsHandler.bind(introStore));

export default introStore;




