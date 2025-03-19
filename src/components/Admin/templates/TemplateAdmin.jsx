import NavbarAdmin from '../../admin/molecules/NavbarAdmin';
import PropTypes from 'prop-types';
import BarTopAdmin from '../../admin/atoms/BarTopAdmin';
import { Outlet } from 'react-router-dom';
import Crud from '../molecules/Crud';

const TemplateAdmin = () => {
  return (
    <>
      <BarTopAdmin />
      <NavbarAdmin />
      <main>
        <Crud />
        <Outlet />
      </main>
    </>
  );
};

TemplateAdmin.propTypes = {
  children: PropTypes.node,
};

export default TemplateAdmin;
