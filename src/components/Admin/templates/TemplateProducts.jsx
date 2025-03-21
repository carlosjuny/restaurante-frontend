import NavbarAdmin from '../organisms/layouts/NavbarAdmin';
import BarTopAdmin from '../atoms/BarTopAdmin';
// import { Outlet } from 'react-router-dom';
import Products from '../../admin/organisms/AdminSectionAdd';

const TemplateProducts = () => {
  return (
    <>
      <BarTopAdmin />
      <NavbarAdmin />
      <main>
        <Products />
        {/* <Outlet /> */}
      </main>
    </>
  );
};

export default TemplateProducts
