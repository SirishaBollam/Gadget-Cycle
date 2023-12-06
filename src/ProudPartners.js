import './ProudPartners.css';
import cococola from './cococola.svg';
import openai from './openai.webp';
import pallet from './pallet.webp';
import casual from './casual.svg';
import plain from './plain.svg';
import passionfroot from './passionfroot.svg';
import dopt from './dopt.svg';
import hyperline from './hyperline.svg';
import ondeck from './ondeck.svg';
import bravado from './bravado.svg';
import beacons from './beacons.svg';

function ProudPartners() {
    return (
        <div className='proud-partners'>
            <div className='proud-heading'>
                <h2>Proud Partners in Empowering Education</h2>
            </div>
            <div className='company-logos'>
                <div className='company-logos-line'>
                    <img src={cococola} alt='cococola' style={{"height" : "40px", "width" : "110px"}}/>
                    <img src={openai} alt='openai' style={{"height" : "40px", "width" : "139px"}}/>
                    <img src={pallet} alt='pallet' style={{"height" : "40px", "width" : "125px"}}/>
                    <img src={casual} alt='casual' style={{"height" : "40px", "width" : "146px"}}/>
                    <img src={plain} alt='plain' style={{"height" : "40px", "width" : "81px"}}/>
                    <img src={passionfroot} alt='passionfroot' style={{"height" : "40px", "width" : "157px"}}/>
                </div>
                <div className='company-logos-line'>
                    <img src={dopt} alt='dopt' style={{"height" : "40px", "width" : "111px"}}/>
                    <img src={hyperline} alt='hyperline' style={{"height" : "40px", "width" : "191px"}}/>
                    <img src={ondeck} alt='ondeck' style={{"height" : "40px", "width" : "151px"}}/>
                    <img src={bravado} alt='bravado' style={{"height" : "40px", "width" : "160px"}}/>
                    <img src={beacons} alt='beacons' style={{"height" : "40px", "width" : "151px"}}/>
                </div>
            </div>
        </div>
    );
}

export default ProudPartners;
