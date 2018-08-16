import { notify } from '../actions/notification';

const FAMILIAS = "FAMILIAS";

export function setFamilias(familias, callback) {
  if (callback !== null) callback(familias);
  return {
    type: FAMILIAS,
    familias
  };
}

export function getFamilias(callback) {
  return dispatch => {
    const URL = `${process.env.REACT_APP_API_URL}/api/familia`;
    
    fetch(URL, { method: "GET" })
      .then(response => {        
        if (response.status === 204)
          throw new Error(response.statusText);
        else
          return response.json()
      })
      .then(familias => {
        if (familias.error)
          throw new Error(familias.error);
        
        dispatch(setFamilias(familias, callback));        
      })
      .catch(err => {        
        dispatch(notify(true, "error", err));
      });
  };
}

export function insertFamilia(familia, callback){
  return dispatch => {

    const URL = `${process.env.REACT_APP_API_URL}/api/familia`;
    const HEADER = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
    
    fetch(URL, { method: "POST", headers: HEADER, body: JSON.stringify(familia) })
      .then(response => {        
        if (response.status === 204)
          throw new Error(response.statusText);
        else
          return response.json()
      })
      .then(familia => {
        if (familia.error)
          throw new Error(familia.error);       

        callback();
      })
      .catch(err => {        
        dispatch(notify(true, "error", err));
      });
  }
}