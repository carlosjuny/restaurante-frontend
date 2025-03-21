import NavbarAdmin from '../../admin/organisms/layouts/NavbarAdmin';
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


export default TemplateAdmin
