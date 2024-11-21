import React from 'react';
import styled from 'styled-components';
import Image from '../atoms/Image';
import FormCard from '../atoms/FormCard';
import img1 from '../../../assets/image/contact_section_1.png';

const SectionStyle = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 80px;

  .contact-image {
    width: 100%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: none;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const ContactSection = () => {
  return (
    <SectionStyle>
      <Image img={<img src={img1} alt="Contact Section" className="contact-image" />} />
      <FormCard />
    </SectionStyle>
  );
};

export default ContactSection;
