import AppDispatcher from '../dispatcher/AppDispatcher';

export function updatePlaceholder(data){
  AppDispatcher.dispatch({
    actionType: 'UPDATE_PLACEHOLDER',
    values: data
  });
}
