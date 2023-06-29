import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../images/user.jpeg';


function GetAvatar(props) {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
   
    console.log('La usuaria ha abierto la ventana para elegir ficheros');

    console.log('La usuaria ha elegido los ficheros', ev.currentTarget.files);

    console.log(
      'El primero de los ficheros elegidos es',
      ev.currentTarget.files[0]
    );

    if (ev.currentTarget.files.length > 0) {
      
      const myFile = ev.currentTarget.files[0];

      fr.addEventListener('load', getImage);

      
      fr.readAsDataURL(myFile);
    }
    
  };

  const getImage = () => {
    

    const image = fr.result;

    
    props.updateAvatar(image);
  };

//const avatar = props.avatar === '' ? defaultAvatar : props.avatar;

  
  return (
    <div className="buttons-img">
      <label className="buttons-img__btn">
        {props.text}
        <input
          type="file"
          ref={myFileField}
          className="hidden"
          onChange={uploadImage}
        />
      </label>
      {/* 
        <div
          className="get-avatar__preview"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>

      */}
    </div>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;