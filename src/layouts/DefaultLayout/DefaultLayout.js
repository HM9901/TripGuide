import Header from '~/layouts/components/Header';
import Slide from '~/layouts/components/Slide';
import Footer from '~/layouts/components/Footer';
import BestPlace from './BestPlace';
import Featured from './Featured';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Slide />
            <BestPlace />
            <Featured />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
