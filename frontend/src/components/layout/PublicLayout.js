import NavbarComponent from '../Navbar';
import FooterComponent from '../Footer';
import ScrollProgress from './ScrollProgress';
import GradientBackground from '../effects/GradientBackground';

const PublicLayout = ({ children, showFooter = true }) => (
  <div className="min-h-screen flex flex-col">
    <ScrollProgress />
    <NavbarComponent />
    <GradientBackground className="flex-1">
      <main className="flex-1">{children}</main>
    </GradientBackground>
    {showFooter && <FooterComponent />}
  </div>
);

export default PublicLayout;
