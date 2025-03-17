import styled from 'styled-components';
import PropsTypes from 'prop-types'

const IconStyle = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = ({ icon }) => {
  return (
    <IconStyle>
      {icon}
    </IconStyle>
  );
};

Icon.propTypes = {
  icon: PropsTypes.node.isRequired
}

export default Icon;
