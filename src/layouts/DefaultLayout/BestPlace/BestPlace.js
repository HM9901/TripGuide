import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './BestPlace.module.scss';
import classNames from 'classnames/bind';
import {
    faBed,
    faCar,
    faChevronDown,
    faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';

import image from '~/assets/images/';
const cx = classNames.bind(styles);
function BestPlace() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-bar')}>
                <div className={cx('search-bar-opt')} style={{ flex: '1' }}>
                    <div className={cx('search-bar-top')}>
                        <div className={cx('search-bar-top-left')}>
                            <div className={cx('search-bar-section')}>
                                <FontAwesomeIcon
                                    icon={faBed}
                                    className={cx('search-bar-section-icon')}
                                />
                                <span>Hotel</span>
                            </div>
                            <div className={cx('search-bar-section')}>
                                <FontAwesomeIcon
                                    icon={faPlaneDeparture}
                                    className={cx('search-bar-section-icon')}
                                />
                                <span>Flight</span>
                            </div>
                            <div className={cx('search-bar-section')}>
                                <FontAwesomeIcon
                                    icon={faCar}
                                    className={cx('search-bar-section-icon')}
                                />
                                <span>Car Rental</span>
                            </div>
                        </div>
                        <div className={cx('search-bar-top-right')}>
                            <div className={cx('search-bar-top-right-sec')}>
                                <span>Round trip</span>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            <div className={cx('search-bar-top-right-sec')}>
                                <span>1 passenger</span>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('search-bar-bottom')}>
                        <div
                            className={cx('search-bar-bottom-sec')}
                            style={{ width: '40%' }}
                        >
                            <span className={cx('search-bar-label')}>
                                Location
                            </span>
                            <input
                                type="text"
                                placeholder="Where are you from?"
                            />
                            <div className={cx('search-bar-label-icon')}>
                                <img src={image.vector} alt="" />
                            </div>
                        </div>
                        <div
                            className={cx('search-bar-bottom-sec')}
                            style={{ width: '30%', margin: '0 10px' }}
                        >
                            <label className={cx('search-bar-label')}>
                                Check in
                            </label>
                            <input type="text" placeholder="Add Date" />
                            <div className={cx('search-bar-label-icon')}>
                                <img src={image.vector} alt="" />
                            </div>
                        </div>
                        <div
                            className={cx('search-bar-bottom-sec')}
                            style={{ width: '30%' }}
                        >
                            <label className={cx('search-bar-label')}>
                                Check out
                            </label>
                            <input type="text" placeholder="Add date" />
                        </div>
                        {/* <div>
                            <div className={cx('search-bar-sec-bottom')}>
                                <label className={cx('search-bar-label')}>
                                    Passenger
                                </label>
                                <input
                                    type="text"
                                    placeholder="Add Passenger"
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className={cx('search-bar-opt')}>
                    <button className={cx('search-bar-btn')}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default BestPlace;
