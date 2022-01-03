import React, { HTMLAttributes } from 'react';
import { classNameGenerator } from '../tools';

const sc = classNameGenerator('layout');

interface asideProps extends HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
}

const Sider: React.FC<asideProps> = (props) => {
  const { className = '', collapsed, children, ...rest } = props;
  return (
    <aside
      className={`${sc('sider')} ${className} ${sc(`sider-${collapsed ? 'collapsed' : ''}`)}`}
      {...rest}
    >
      {children}
    </aside>
  );
};

export default Sider;
