import React, { useState, useEffect } from 'react';
import logo from '../img/Logo.png';

function ImgCar(img) {

  return (<img src={img} />);
}

function Body() {

  const imgLogo = ImgCar(logo);
  const axios = require('axios');

  const [imgId, setImgId] = useState(imgLogo);
  const [listaCars, setlistaCars] = useState([]);
  const sendGetRequest = async () => {
    let resp;
    try {
      resp = await axios.get('https://jkflix.herokuapp.com/carros');
      setlistaCars(resp.data);
      //console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
    return resp.data;
  };

  sendGetRequest().then((resp) => {

    importarImg(resp);

  });


  /*
    function getTest() {
  
      return fetch(`https://jkflix.herokuapp.com/carros`).then(async (respostaServidor) => {
        if (respostaServidor.ok) {
          const resposta = await respostaServidor.json();
          return resposta;
        }
        console.log(respostaServidor);
        throw new Error('Não foi possível pegar os dados');
      });
    }
  
    useEffect(() => {
      getTest()
        .then((list) => {
          console.log(list)
          import(`../img/${list[0].id}.jpg`).then(image => {
            setImgId(image);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  */

  return (
    <div>
    </div>
  );

    

  function importarImg(resp) {
    import(`../img/${resp[0].id}.jpg`).then(image => {
      setImgId(ImgCar(image.default));
    });
  }
}

export default Body;