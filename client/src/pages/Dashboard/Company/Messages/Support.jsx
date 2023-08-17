import DashNav from '../../../../components/DashNav/DashNav';
import Sidebar from '../../../../layout/Sidebar/ClientSidebar';
import design from './support.module.css';

const Support3 = () => {
  return (
    <div className={design.projects}>
      <div className={design.project_body}>
        <Sidebar />
        <div className={design.project_main}>
          <DashNav title='MESSAGES' />
          <div className={design.come_soon}>
            <h1>COMING SOON</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support3;
