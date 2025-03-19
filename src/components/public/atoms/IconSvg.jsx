import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import arrowUp from '../../../assets/svg/up.svg';
import EditIcon from '../../../assets/svg/badge.svg';
import DeleteIcon from '../../../assets/svg/badge.svg';

const icons = {
  arrowUp,
  EditIcon,
  DeleteIcon
};

const IconSvg = ({ name, size = 24, className, fill, ...props }) => {
  const icon = icons[name];

  if (!icon) return null;

  return (
    <ReactSVG
      src={icon}
      className={className} 
      beforeInjection={(svg) => {
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);

        if (fill) {
          svg.querySelectorAll("*").forEach((el) => {

            el.setAttribute("fill", fill);
          });
        }
      }}
      {...props}
    />
  );
};

IconSvg.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  fill: PropTypes.string
};

export default IconSvg;
