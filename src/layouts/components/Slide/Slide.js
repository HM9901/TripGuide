import styles from './Slide.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/images';

const cx = classNames.bind(styles);
function Slide() {
    return (
        <div
            className={cx('slider')}
            style={{
                background: `url(${image.slide}) left center / cover no-repeat`,
            }}
        >
            <div className={cx('wrapper')}>
                <h2 className={cx('slider-title')}>
                    Book With Us And Enjoy your Journey !
                </h2>
            </div>
        </div>
    );
}

export default Slide;
