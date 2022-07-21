import Header from '~/layouts/components/Header';
import Slide from '~/layouts/components/Slide';
import Footer from '~/layouts/components/Footer';
function HFLayout({ children }) {
    return (
        <div>
            <Header />
            <Slide />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default HFLayout;
