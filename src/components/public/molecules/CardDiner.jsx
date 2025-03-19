import { useState } from "react";
import InputDiner from "../../public/atoms/InputDiner";
import styled from "styled-components";
import Image from "../../public/atoms/Image";
import Mesas from '../../../assets/images/public/mesa-restaurante.png'

const DinerStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: 800px;
    box-shadow: 1px 1px 2px 2px #c1c1c1;
    top: 60px;

    h1 {
        margin-bottom: 20px;
        text-align: center;
    }

    p {
        margin-bottom: 20px;
    }
`

const ImageStyle = styled(Image)`
    width: 100%;
    position: absolute;
    padding: 10px;
    left: 0;
    bottom: 0;
    img {
        box-shadow: none !important;
    }
`

const CardDiner = () => {
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");

  const options1 = [
    { value: "opcion1", label: "Disponibles" },
    { value: "opcion2", label: "Ocupadas" },
  ];

  const option2 = [
    { value: "opcion1", label: "Central" },
    { value: "opcion2", label: "Esquina" },
    { value: "opcion3", label: "Cerca de entrada" },
  ];

  return (
    <DinerStyle>
      <h1>Reserva tu mesa</h1>
      <p>Ingresa con tu usuario para hacer tu reserva.</p>
      <p>Opción seleccionada: {selectedValue1}</p>
      <InputDiner options={options1}  value={selectedValue1} onChange={(e) => setSelectedValue1(e.target.value)}  />
      <p>Opción seleccionada: {selectedValue2}</p>
      <InputDiner options={option2} value={selectedValue2} onChange={(e) => setSelectedValue2(e.target.value)}  />
      <ImageStyle img={Mesas} />
    </DinerStyle>
  );
};

export default CardDiner;
