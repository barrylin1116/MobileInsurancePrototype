export interface ModalProps {
    className?: string,
    title?: string,
    confirmBtnText?: string | JSX.Element,
    cancelBtnText?: string | JSX.Element,
    visible: boolean,
    onConfirm?: () => void,
    onClose?: () => void,
    role?: string
}
