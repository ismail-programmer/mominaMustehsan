import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './header.css';
class Header extends Component {
  render() {
    return (
      <div id='header'>
        <div className='header-container'>
          <ul className='header-ul'>
            <li className='header-li'>
              <Link className='header-a' to='/'>
                <button selected className='header-btn'>
                  Home
                </button>
              </Link>
            </li>
            <li className='header-li'>
              <Link className='header-a' to='/music'>
                <button className='header-btn'>Music</button>
              </Link>
            </li>
            <li className='header-li'>
              <Link className='header-a' to='/gallery'>
                <button className='header-btn'>Gallery</button>
              </Link>
            </li>
            <li className='header-li'>
              <Link className='header-a' to='/bio'>
                <button className='header-btn'>Bio</button>
              </Link>
            </li>
            <li className='header-li'>
              <Link className='header-a' to='/contact'>
                <button className='header-btn'>Contact</button>
              </Link>
            </li>
            <li className='header-li'>
              <Link className='header-a' to='/owner'>
                <button className='header-btn'>Owner</button>
              </Link>
            </li>
          </ul>
          <ul className='header-ul-2'>
            <li className='header-li-2'>
              <SocialIcon
                className='header-a-2'
                style={{ height: 35, width: 35 }}
                url='https://instagram.com/mominamustehsan'
              />
            </li>
            <li className='header-li-2'>
              <SocialIcon
                className='header-a-2'
                style={{ height: 35, width: 35 }}
                url='https://twitter.com/mominamustehsan'
              />
            </li>
            <li className='header-li-2'>
              <SocialIcon
                className='header-a-2'
                style={{ height: 35, width: 35 }}
                url='https://facebook.com/mominamustehsanofficial/'
              />
            </li>
            <li className='header-li-2'>
              <SocialIcon
                className='header-a-2'
                style={{ height: 35, width: 35 }}
                url='mailto:mominamustehsan.infoamerica@gmail.com'
              />
            </li>
            <li className='header-li-2'>
              <SocialIcon
                className='header-a-2'
                style={{ height: 35, width: 35 }}
                url='https://youtube.com/channel/UCKD6vE4flyeDXYpSh7l3FWA'
              />
            </li>
          </ul>
        </div>
        <div className='nagivation'>
          <input
            type='checkbox'
            id='nav-toggle'
            className='nav-checkbox navigation-checkbox'
          />
          <label htmlFor='nav-toggle' className='nav-btn'>
            <span className='nav-icon'>&nbsp;</span>
          </label>
          <div className='nav-bg navigation-background'>&nbsp;</div>
          <nav className='navigation-nav'>
            <ul className='nav-list-1'>
              <li className='nav-item-1'>
                <div className='nav-link'>
                  <span className='nav-span'>01</span>
                  <Link className='nav-link-1' to='/home'>
                    Home
                  </Link>
                </div>
              </li>

              <li className='nav-item-1'>
                <div className='nav-link'>
                  <span className='nav-span'>02</span>
                  <Link className='nav-link-1' to='/music'>
                    Music
                  </Link>
                </div>
              </li>

              <li className='nav-item-1'>
                <div className='nav-link'>
                  <span className='nav-span'>03</span>
                  <Link className='nav-link-1' to='/gallery'>
                    Gallery
                  </Link>
                </div>
              </li>
              <li className='nav-item-1'>
                <div className='nav-link'>
                  <span className='nav-span'>04</span>
                  <Link className='nav-link-1' to='/bio'>
                    Bio
                  </Link>
                </div>
              </li>
              <li className='nav-item-1'>
                <div className='nav-link'>
                  <span className='nav-span'>05</span>
                  <Link className='nav-link-1' to='/contact'>
                    Contact
                  </Link>
                </div>
              </li>
              <li className='nav-item-1'>
                <div className='nav-link'>
                  <span className='nav-span'>06</span>
                  <Link className='nav-link-1' to='/owner'>
                    Owner
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default Header;
