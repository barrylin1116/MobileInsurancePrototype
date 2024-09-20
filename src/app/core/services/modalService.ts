import { ModalNamesEnum } from 'app/core/enums/ui/modals';
import { setModalVisibleAction } from 'app/store/ui/actions';
import store from '../../store/store';
import { ModalProps } from '../../store/ui/types';

/**
 * @description 設置 Modal 能見度
 * @param name Modal Name
 * @param visible Modal 能見度
 */
const trigger = (name: ModalNamesEnum, visible: boolean, modalProps?: ModalProps) => {
  store.dispatch(setModalVisibleAction(name, visible, modalProps));
};

export default {
  trigger
};
