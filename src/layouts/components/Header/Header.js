import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images/';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-left')}>
                    <img
                        src={images.logo}
                        alt="TripGuide"
                        className={cx('header-logo')}
                    />
                    <span>TripGuide</span>
                </div>
                <div className={cx('header-right')}>
                    <span className={cx('header-currency')}>USD</span>
                    <img
                        src={images.flag}
                        alt=""
                        className={cx('header-language')}
                    />
                    <div className={cx('header-notify')}>
                        <svg
                            width={17}
                            height={20}
                            viewBox="0 0 17 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.9981 15.0004H3.99802V8.50017C3.99802 6.00007 5.99803 4 8.49805 4C10.9981 4 12.9981 6.00007 12.9981 8.50017V15.0004ZM15 14.0005V8.50031C15 5.4302 12.86 2.86011 10 2.18008V1.50006C10 0.671598 9.32843 0 8.5 0C7.67157 0 7 0.671598 7 1.50006V2.18008C4.13 2.86011 2 5.4302 2 8.50031V14.0005L0 16.0006V17.0006H17V16.0006L15 14.0005ZM8.49994 20.0001C9.6045 20.0001 10.4999 19.1046 10.4999 18H6.49996C6.49996 19.1046 7.39538 20.0001 8.49994 20.0001Z"
                                fill="#84878B"
                            />
                        </svg>
                        <span>1</span>
                    </div>
                    <div className={cx('header-profile')}>
                        <img
                            src={images.ava}
                            alt=""
                            className={cx('header-avatar')}
                        />
                        <span className={cx('header-name')}>Delowar</span>
                        <svg
                            width={10}
                            height={6}
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.93248 0C9.3564 0 9.58798 0.494429 9.31659 0.820092L5.38411 5.53907C5.18421 5.77894 4.81579 5.77894 4.61589 5.53907L0.68341 0.820091C0.412024 0.494428 0.643601 0 1.06752 0L8.93248 0Z"
                                fill="#3B3E44"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
