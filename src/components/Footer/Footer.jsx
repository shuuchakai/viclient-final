import { Link } from 'react-router-dom';

import Banana from '../../assets/svg/Banana.svg';
import Watermelon from '../../assets/svg/Watermelon.svg';
import Carrot from '../../assets/svg/Carrot.svg';
import Strawberry from '../../assets/svg/Strawberry.svg'

import './Footer.css';

function Footer() {
    return (
        <footer className="mainFooter">
            <div className="mainFooter_top">
                <div className="mainFooter_topLeft">
                    <img className="mainFooter_topBananaLeft" src={Banana} alt="Banana" />
                    <img className="mainFooter_topWatermelonLeft" src={Watermelon} alt="Watermelon" />
                    <img className="mainFooter_topCarrotLeft" src={Carrot} alt="Carrot" />
                    <img className="mainFooter_topStrawberryLeft" src={Strawberry} alt="Strawberry" />
                </div>
                <div className="mainFooter_topMiddle">
                    <p className="mainFooter_topMiddleTitle">Mejora tu bienestar en una forma moderna</p>
                    <Link to="/signup" className="mainFooter_topMiddleButton">Empieza ahora</Link>
                </div>
                <div className="mainFooter_topRight">
                    <img className="mainFooter_topBananaRight" src={Banana} alt="Banana" />
                    <img className="mainFooter_topWatermelonRight" src={Watermelon} alt="Watermelon" />
                    <img className="mainFooter_topCarrotRight" src={Carrot} alt="Carrot" />
                    <img className="mainFooter_topStrawberryRight" src={Strawberry} alt="Strawberry" />
                </div>
            </div>
            <div className="mainFooter_bottom"></div>
        </footer>
    )
}

export default Footer