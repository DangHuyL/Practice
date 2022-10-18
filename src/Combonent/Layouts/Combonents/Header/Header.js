import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPerson,
    faPlus,
    faQuestion,
    faSignOut,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/Combonent/Button';
import Menu from '~/Combonent/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/Combonent/Icon';
import Image from '~/Combonent/Image';
import Search from './Search';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;
    const MENU_ITEMS = [
        {
            title: 'English',
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            children: {
                title: 'Language',
                data: [
                    {
                        title: 'English',
                        code: 'en',
                    },
                    {
                        title: 'VietNam',
                        code: 'Vie',
                    },
                ],
            },
        },
        {
            title: 'Feedback and help',
            icon: <FontAwesomeIcon icon={faQuestion} />,
            to: '/help',
        },
        {
            title: 'Keyboard shortcuts',
            icon: <FontAwesomeIcon icon={faKeyboard} />,
        },
    ];
    const USER_MENU = [
        {
            title: 'View profile',
            icon: <FontAwesomeIcon icon={faPerson} />,
        },
        {
            title: 'Get coins',
            icon: <FontAwesomeIcon icon={faCoins} />,
            to: '/getCoin',
        },
        {
            title: 'LIVE Studio',
            icon: <FontAwesomeIcon icon={faVideo} />,
            to: '/Live',
        },
        {
            title: 'Setting',
            icon: <FontAwesomeIcon icon={faGear} />,
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            title: 'Log out',
            icon: <FontAwesomeIcon icon={faSignOut} />,
            to: '/logout',
            separate: true,
        },
    ];

    const handleOnchange = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="titok" />
                </div>
                <Search />
                <div className={cx('active')}>
                    <Button
                        rectangle
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                    >
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy interactive content="Messages">
                                <button className={cx('active-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('active-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? USER_MENU : MENU_ITEMS}
                        onChange={handleOnchange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('avatar_user')}
                                alt="Avatar"
                                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/309073835_605672617924571_4901306354283127960_n.jpg?stp=dst-jpg_s206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=OKmkdKJx1kUAX9lccR9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRNaUnTH6a5p2uyg75RUpPsbIKsXOFTWzOr7iydVNEOsA&oe=634F6428"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
