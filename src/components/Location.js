import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
        dispatch({
            type: 'CHG_LOCATION',
            payload: val,
        })
    }
    
  return (
        <div> Currency (
            <select name="Location" id="Location" class="form-select" onChange={event=>changeLocation(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£" selected>£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
            )
        </div>
    );
};

export default Location;