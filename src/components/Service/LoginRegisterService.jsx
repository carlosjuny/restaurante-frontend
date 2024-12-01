import React, { useEffect } from 'react';

const LoginRegisterService = () => {

  useEffect(() => {
    fetch('')
    .then(res => res.json())
    .then(data => console.log(data));
  });

  return (
    <>
      <h1>Hola mundo</h1>
    </>
  )
}

export default LoginRegisterService;
