import React from 'react';
import HomeRoutes from './HomeRoutes';
import ModalLayout from '../../common/layouts/ModalLayout';
import { TimeProvider } from '../../core/hooks/TimeContext';

const HOME: React.FC<any> = (props) => {
  return (
    <div id="HOME_LAYOUT_MODAL">
      <TimeProvider>
        <HomeRoutes />
        <ModalLayout />
      </TimeProvider>
    </div>

  );
};

export default HOME;
