import styled from 'styled-components';
import Image from '../atoms/Image';
import FormCard from '../atoms/FormCard';
import img1 from '../../../assets/image/contact_section_1.png';

const SectionStyle = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 80px;

  .contactImage {
    width: 100%;
    box-shadow: none;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 17.5%;
    width: 30%;
    height: 89%;
    background-color: rgba(53, 52, 52, 0.71);
    z-index: 1;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    .contactImage {
      border-top-right-radius: 0;
    }

    .form-card {
      width: 35%;
    }
  }
`;

const ContactSection = () => {
  return (
    <SectionStyle>
      <div className="image-overlay" /> {/* Aquí va el fondo */}
      <Image img={<img src={img1} alt="Contact Section" className="contactImage" />} />
      <div className="form-card">
        <FormCard />
      </div>
    </SectionStyle>
  );
};

export default ContactSection;
