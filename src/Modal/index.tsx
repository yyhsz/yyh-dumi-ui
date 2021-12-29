import React from 'react';
import ReactDOM from 'react-dom';
import { classNameGenerator } from '../tools';
import { Button } from 'yyhreact-ui2';

import './index.less';

const sc = classNameGenerator('modal');

interface Props {
  visible?: boolean | undefined;
  mask?: boolean | undefined;
  maskCloseAble?: boolean | undefined;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  onOk?: (e: React.MouseEvent) => void;
  onCancel?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  okText?: string;
  cancelText?: string;
  closable?: boolean;
}
interface ModalFuncProps {
  mask?: boolean | undefined;
  maskCloseAble?: boolean | undefined;
  title?: React.ReactNode;
  onOk?: (e: React.MouseEvent) => void;
  onCancel?: (e: React.MouseEvent) => void;
  okText?: string;
  cancelText?: string;
  content?: React.ReactNode;
}
interface ModalStaticFunctions {
  confirm: (config: ModalFuncProps) => void;
}

const Modal: React.FC<Props> & ModalStaticFunctions = (props) => {
  const {
    visible,
    className = '',
    style,
    mask = true,
    maskCloseAble = true,
    children,
    title = '提示',
    onOk = () => {},
    onCancel = () => {},
    okText = '确认',
    cancelText = '取消',
    closable = true,
    footer = (
      <div>
        <Button onClick={onCancel}>{cancelText} </Button>
        <Button type="primary" onClick={onOk}>
          {okText}
        </Button>
      </div>
    ),
  } = props;
  console.log(children, 'chil');
  // console.log(footer, 'asdf');
  const content = (
    <div className={`${sc()} ${className}`} style={style}>
      {mask ? (
        <div
          className={sc('mask')}
          onClick={maskCloseAble === null || maskCloseAble === false ? () => {} : onCancel}
        ></div>
      ) : null}
      <div className={sc('content')}>
        {closable ? (
          <div className="icon" onClick={onCancel}>
            <svg className="yyh-icon" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </div>
        ) : null}
        {title === null || title === false ? null : (
          <header>
            <div>{title}</div>{' '}
          </header>
        )}
        <main>{children}</main>
        {footer === null || footer === false ? null : <footer>{footer}</footer>}
      </div>
    </div>
  );

  return visible ? ReactDOM.createPortal(content, document.body) : null;
};

Modal.confirm = (config) => {
  const {
    mask = true,
    maskCloseAble = true,
    title,
    content,
    onOk = () => {},
    onCancel = () => {},
    okText = '确定',
    cancelText = '取消',
  } = config;

  const tempDiv = document.createElement('div');
  document.body.append(tempDiv);
  const closeFoo = () => {
    //不能在非函数组件内使用setState，所以不能用visible来控制modal
    ReactDOM.unmountComponentAtNode(tempDiv);
    tempDiv.remove();
  };
  const modalChildren = (
    <div className={sc('confirm')}>
      <div className={sc('confirm-title')}>{title}</div>
      <div className={sc('confirm-content')}>{content}</div>
      <div className={sc('confirm-footer')}>
        <Button
          onClick={(e: React.MouseEvent) => {
            onCancel(e);
            closeFoo();
          }}
        >
          {cancelText}
        </Button>
        <Button
          type="primary"
          onClick={(e: React.MouseEvent) => {
            onOk(e);
            closeFoo();
          }}
        >
          {okText}
        </Button>
      </div>
    </div>
  );

  const modal = (
    <Modal
      visible={true}
      onOk={closeFoo}
      onCancel={onCancel}
      mask={mask}
      maskCloseAble={maskCloseAble}
      title={null}
      okText={okText}
      cancelText={cancelText}
      closable={false}
      footer={null}
    >
      {modalChildren}
    </Modal>
  );
  ReactDOM.render(modal, tempDiv);
  return;
};

export default Modal;
