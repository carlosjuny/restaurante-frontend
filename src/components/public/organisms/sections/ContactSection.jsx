import styled from 'styled-components';
import Image from '../../atoms/Image';
import Form from '../../molecules/Form';
import img1 from '../../../../assets/images/public/contact_section_1.png';
import InputForm from '../../atoms/InputForm';
import Button from '../../atoms/Button';

const SectionStyle = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 80px;

  .contactImage {
    box-shadow: none ;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 57.5%;
    background-color: rgba(53, 52, 52, 0.71);
    z-index: 1;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    .contactImage {
      border-top-right-radius: 0;
    }

    .formCard {
      width: 35%;
    }

    .image-overlay {
      width: 40%;
      height: 86.5%;
      left: 12.5%;
    }
  }

  @media (min-width: 1024px) {
    .image-overlay {
    left: 17.5%;
    width: 30%;
    height: 84.5%;
  }
  }

  @media (min-width: 1440px) {
    .image-overlay {
    height: 89%;
  }
}
`;

const FormStyle = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #333333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  padding: 40px;
  gap: 20px;

  input {
    position: relative;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #F4D976;
  }

  textarea {
    position: relative;
    width: 100%; 
    height: 10rem; 
    padding: 8px;
    background: none;
    border: 1px solid #F4D976;
    color: #ffffff;
    font-size: 16px;
    resize: none;
  }

  .button {
    width: 200px;
    height: 45px;
    top: 15px;
    left: 20%;
    background-color: #E9D279;
    font-weight: 600;
    border-radius: 5px;
    font-size: 18px;
    transition: all 0.5s;

    &:hover {
      transition: all 0.5s;
      background-color: #ffffff;
      color: #343434;
    }
  }

  @media  (min-width: 1024px){

    textarea {
      height: 100%;
    }
  }
`;

const ContactSection = () => {
  return (
    <SectionStyle>
      <div className="image-overlay" />
      <Image img={img1} alt="Contact Section" className="contactImage" />
      <div className="formCard">
          <FormStyle>
            <InputForm placeholder="Nombre" />
            <InputForm placeholder="Correo" />
            <InputForm placeholder="Asunto" />
            <textarea placeholder="Mensaje"/>
            <Button className='button'>
                <p>Enivar</p>
            </Button>
          </FormStyle>
      </div>
    </SectionStyle>
  );
};

export default ContactSection;
