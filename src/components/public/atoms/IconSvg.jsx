import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import arrowUp from '../../../assets/svg/up.svg';
import EditIcon from '../../../assets/svg/badge.svg';
import DeleteIcon from '../../../assets/svg/badge.svg';
import Toogle from '../../../assets/svg/menu_grid.svg';
import Dowm from '../../../assets/svg/down.svg';
import Up from '../../../assets/svg/up.svg';
import Filter from '../../../assets/svg/filter.svg';
import Settings from '../../../assets/svg/settings.svg';
import Store from '../../../assets/svg/store.svg';
import User from '../../../assets/svg/user.svg';
import Edit from '../../../assets/svg/edit.svg';
import Warning from '../../../assets/svg/warning.svg';
import Delette from '../../../assets/svg/delette.svg';
import Back from '../../../assets/svg/back.svg';
import Exitt from '../../../assets/svg/exitt.svg';

const icons = {
  arrowUp,
  EditIcon,
  DeleteIcon,
  Toogle,
  Dowm,
  Up,
  Filter,
  Settings,
  Store,
  User,
  Edit,
  Warning,
  Delette,
  Back,
  Exitt
};

const IconSvg = ({ name, size = 24, className, fill, ...props }) => {
  const icon = icons[name];

  if (!icon) return null;

  return (
    <ReactSVG
      src={icon}
      className={className} 
      beforeInjection={(svg) => {
        const iconSize = Number(size);
        svg.setAttribute('width', iconSize);
        svg.setAttribute('height', iconSize);

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
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  fill: PropTypes.string
};

export default IconSvg;
