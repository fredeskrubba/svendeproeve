import React from 'react'
import {ReactComponent as FacebookIcon} from "../assets/icons/facebook-icon.svg"
import {ReactComponent as InstaIcon} from "../assets/icons/insta-icon.svg"
import {ReactComponent as LinkedInIcon} from "../assets/icons/linkedin-icon.svg"

const Footer = () => {
  return (
    <footer>
        <article className='footer-links'>
            <section>
                <h2>ADRESSE</h2>
                <p>Det utrolige teater</p>
                <p>Havnegade 901</p>
                <p>9000 Aalborg</p>
                <p>EAN 5798003279845</p>
                <p>CVR 1001 0012</p>
                <p className='last-para'>Find vej på kort</p>
            </section>
            <section>
                <article className='service'>
                    <h2>BILLETSERVICE</h2>
                    <p>Se åbningstider</p>
                    <p>Billettelefon: +45 96 31 80 80</p>
                    <p>billet@dut.dk</p>
                </article>
                <article>
                    <h2>ADMINISTRATION</h2>
                    <p>Telefon: +45 96 31 80 90</p>
                    <p>adm@dut.dk</p>
                </article>
            </section>
            <section>
                <h2>PRAKTISK INFO</h2>
                <p>Kontakt</p>
                <p>Kom trygt i teatret</p>
                <p>Presseside</p>
                <p>Skoleforestillinger</p>
                <p>Teatercaféen</p>
                <p>Handelsbetingelser</p>
            </section>
        </article>
        <section className='icons'>
            <FacebookIcon/>
            <InstaIcon/>
            <LinkedInIcon/>
        </section>
    </footer>
  )
}

export default Footer