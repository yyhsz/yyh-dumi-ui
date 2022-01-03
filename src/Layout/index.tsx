import InternalLayout, { Header, Content, Footer } from './layout';
// extends React.FC<React.HTMLAttributes<HTMLDivElement>>
interface LayoutType {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  // Sider: typeof ;
}

const Layout = InternalLayout as typeof InternalLayout & LayoutType;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

export default Layout;
