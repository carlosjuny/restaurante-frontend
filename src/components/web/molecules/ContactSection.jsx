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
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: none;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    .contactImage {
      border-top-right-radius: 0;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    .form-card {
      width: 35%;
    }
  }
`;

const ContactSection = () => {
  return (
    <SectionStyle>
      <Image img={<img src={img1} alt="Contact Section" className="contactImage" />} />
      <div className="form-card">
        <FormCard />
      </div>
    </SectionStyle>
  );
};

export default ContactSection;
