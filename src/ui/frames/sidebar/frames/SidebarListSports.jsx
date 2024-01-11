import styles from './SidebarList.module.css'
import SoccerSvg from './svg/SoccerSvg'
import TennisSvg from './svg/TennisSvg'
import AmericanSvg from './svg/AmericanSvg'
import BascketballSvg from './svg/BascketballSvg'
import IceSvg from './svg/IceSvg'
import MmaSvg from './svg/MmaSvg'
import TableSvg from './svg/TableSvg'
import CsSvg from './svg/CsSvg'
import DotaSvg from './svg/DotaSvg'
import CricketSvg from './svg/CricketSvg'


const SidebarListSports = ({flag, setActiveContent, elemStyles }) => {
   const handleClick = (contentId) => {
      setActiveContent(contentId);
   };
   
   return (
      <div className={flag ? styles.sidebarListSportsCollapsed : styles.sidebarListSports}>
         {!flag && (<div style={{marginBottom: '2px', fontSize: '16px', color: '#F5F8FF', textWrap: 'nowrap'}}>Sports Games</div>)}
         
         <div style={elemStyles} onClick={() => handleClick('Originals')}>
            <SoccerSvg coll = '#576081'/>
            {!flag && (<>Soccer</>)}
            
         </div>
         
         <div style={elemStyles} onClick={() => handleClick('Recently')}>
            <TennisSvg coll = '#576081'/>
            {!flag && (<>Tennis</>)}
         </div>
         
         <div style={elemStyles} onClick={() => handleClick('American')}>
            <AmericanSvg coll = '#576081'/>
            {!flag && (<>American Football</>)}
         </div>

         <div style={elemStyles} onClick={() => handleClick('Bascketball')}>
            <BascketballSvg coll = '#576081'/>
            {!flag && (<>Bascketball</>)}
         </div>
         
         <div style={elemStyles} onClick={() => handleClick('Ice')}>
            <IceSvg coll = '#576081'/>
            {!flag && (<>Ice Hockey</>)}
         </div>

         <div style={elemStyles} onClick={() => handleClick('MMA')}>
            <MmaSvg coll = '#576081'/>
            {!flag && (<>MMA</>)}
         </div>

         <div style={elemStyles} onClick={() => handleClick('Formula')}>
            <img src="src\ui\frames\sidebar\frames\svg\Formula.png" alt="" />
            {!flag && (<>Formula 1</>)}
         </div>

         <div style={elemStyles} onClick={() => handleClick('CS2')}>
            <CsSvg coll = '#576081'/>
            {!flag && (<>CS2</>)}
         </div>

         <div style={elemStyles} onClick={() => handleClick('Dota')}>
            <DotaSvg coll = '#576081'/> 
            {!flag && (<>Dota 2</>)}
         </div>

         <div style={elemStyles} onClick={() => handleClick('Cricket')}>
            <CricketSvg coll = '#576081'/> 
            {!flag && (<>Cricket</>)}
         </div>

         <div style={elemStyles} onClick={() => handleClick('All Esports')}>
            <img src="src\ui\frames\sidebar\frames\svg\AllEsports.png" alt="" />
            {!flag && (<>All Esports</>)}
         </div>

         {flag ? (<div style={{width: '100%', height: '1px', background: '#202635'}}></div>) :
                    (<div style={{width: '100%', height: '1px', background: '#202635'}}></div>)}

      </div>

   )
}

export default SidebarListSports