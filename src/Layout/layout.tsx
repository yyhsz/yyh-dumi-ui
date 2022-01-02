import React from 'react';
import { classNameGenerator } from '../tools';

import './index.less';

const sc = classNameGenerator('layout');

type BasicProps = React.HTMLAttributes<HTMLDivElement>;

const Layout = (props: BasicProps) => {
  const { className = '', children } = props;
  console.log(children);

  return <section className={`${sc()} ${className}`}>{children}</section>;
};
const Header = (props: any) => {
  const { className = '', children } = props;
  // console.log(children.);

  return <header className={`${sc('header')} ${className}`}>header{children}</header>;
};
const Content = (props: any) => {
  const { className = '', children } = props;

  return <main className={`${sc('content')} ${className}`}>content{children}</main>;
};
const Footer = (props: any) => {
  const { className = '', children } = props;

  return <footer className={`${sc('footer')} ${className}`}>Footer{children}</footer>;
};

export { Header, Footer, Content };

export default Layout;
