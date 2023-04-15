import {NavLink} from 'react-router-dom';

import styles from './Aside.module.css';

import iconProfile from '../../assets/images/aside/icon-profile.svg'
import iconMessages from '../../assets/images/aside/icon-messages.svg'
import iconNews from '../../assets/images/aside/icon-news.svg'
import iconMusic from '../../assets/images/aside/icon-music.svg'
import iconSettings from '../../assets/images/aside/icon-settings.svg'
import {Contacts} from './Contacts/Contacts';
import {AsideType} from '../../types';

type PropsType = {
    state: AsideType
}

export const Aside = (props: PropsType) => {
    return (
        <aside className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.menu}>
                    <ul className={styles.items}>
                        <li className={styles.item}>
                            <NavLink to="/profile" className={styles.item__link} activeClassName={styles.item__link_active}>
                                <div className={styles.item__image}>
                                    <img src={iconProfile} alt="icon-profile"/>
                                </div>
                                <span>Profile</span>
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/messages" className={styles.item__link} activeClassName={styles.item__link_active}>
                                <div className={styles.item__image}>
                                    <img src={iconMessages} alt="icon-messages"/>
                                </div>
                                <span>Messages</span>
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/news" className={styles.item__link} activeClassName={styles.item__link_active}>
                                <div className={styles.item__image}>
                                    <img src={iconNews} alt="icon-news"/>
                                </div>
                                <span>News</span>
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/music" className={styles.item__link} activeClassName={styles.item__link_active}>
                                <div className={styles.item__image}>
                                    <img src={iconMusic} alt="icon-music"/>
                                </div>
                                <span>Music</span>
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/settings" className={styles.item__link} activeClassName={styles.item__link_active}>
                                <div className={styles.item__image}>
                                    <img src={iconSettings} alt="icon-settings"/>
                                </div>
                                <span>Settings</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={styles.contacts}>
                    <Contacts contacts={props.state.contacts}/>
                </div>
            </div>
        </aside>
    )
}