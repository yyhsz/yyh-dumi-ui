import React from 'react';
import './index.less';

import { classNameGenerator } from '../tools';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  type?: string;
  onClick?: (e: React.MouseEvent) => void;
  size?: string;
  disabled?: boolean;
}

const sc = classNameGenerator('button');
const typeArr = ['primary', 'text', 'link'];
const sizeArr = ['large', 'default', 'small'];

const Button: React.FC<Props> = (props) => {
  const {
    children,
    type,
    onClick,
    className = '',
    style,
    size = 'default',
    disabled = false,
  } = props;
  const btnType = `${sc(typeArr.find((v) => v === type) ? type : '')} ${sc('base')}`;
  const btnSize = `${sc(sizeArr.find((v) => v === size) ? size : 'default')}`;
  return (
    <button
      disabled={disabled}
      className={`${btnType} ${className} `}
      style={style}
      onClick={onClick}
    >
      <span className={`${sc('content')} ${btnSize}`}>{children}</span>
    </button>
  );
};

export default Button;
