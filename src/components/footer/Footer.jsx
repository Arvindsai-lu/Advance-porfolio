import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
// REMOVED: import { AiOutlineSkype } from 'react-icons/ai' - unused import
import { RiDiscordLine } from 'react-icons/ri'
import { ImBlogger2 } from 'react-icons/im'

/**
 * Thêm link tại footer dòng 26
 * <li><a href="#testimonials">Testimonials</a></li>
 */

const Footer = () => {
    return (
        <footer>
            {/* FIXED: Changed href="#" to href="#home" for accessibility */}
            <a href="#home" className='footer__logo'>ARVIND</a>

            <ul className='permalinks'>
                {/* FIXED: Changed href="#" to href="#home" for accessibility */}
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                {/* FIXED: Added rel="noreferrer" to all external links for security */}
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Visit Facebook profile">
                    <FaFacebookF />
                </a>
                <a href="https://www.youtube.com/channel/" target="_blank" rel="noreferrer" aria-label="Visit YouTube channel">
                    <AiOutlineYoutube />
                </a>
                <a href="https://www.linkedin.com/in/arvind-sai-dooda/" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/Arvindsai-lu" target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">
                    <FaGithubAlt />
                </a>
                <a href="http://Arvindsai-lu.github.io/" target="_blank" rel="noreferrer" aria-label="Visit blog">
                    <ImBlogger2 />
                </a>
                <a href="https://discord.com/invite/BygnxeAV" target="_blank" rel="noreferrer" aria-label="Join Discord server">
                    <RiDiscordLine />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; <b><a href="https://www.linkedin.com/in/arvind-sai-dooda/" target="_blank" rel="noreferrer">Arvind</a></b>. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer