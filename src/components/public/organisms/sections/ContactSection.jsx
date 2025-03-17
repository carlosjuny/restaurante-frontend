import styled from 'styled-components';
import Image from '../../atoms/Image';
import Form from '../../molecules/Form';
import img1 from '../../../../assets/images/public/contact_section_1.png';

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

    .form-card {
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

const ContactSection = () => {
  return (
    <SectionStyle>
      <div className="image-overlay" />
      <Image img={<img src={img1} alt="Contact Section" className="contactImage" />} />
      <div className="form-card">
        <Form />
      </div>
    </SectionStyle>
  );
};

export default ContactSection;
