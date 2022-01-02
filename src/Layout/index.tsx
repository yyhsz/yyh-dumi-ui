import React from 'react';
import InternalLayout, { Header, Content, Footer } from './layout';

interface LayoutType extends React.FC<React.HTMLAttributes<HTMLDivElement>> {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  // Sider: typeof ;
}

const Layout = InternalLayout as LayoutType;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

export default Layout;
