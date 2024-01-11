import styles from './SidebarList.module.css'
import OriginalsSvg from './svg/OriginalsSvg'
import RecentlySvg from './svg/RecentlySvg'
import SlotsSvg from './svg/SlotsSvg'
import FavouriteSvg from './svg/FavouriteSvg'
import ArcadeSvg from './svg/ArcadeSvg'
import TableSvg from './svg/TableSvg'
import TvgamesSvg from './svg/TvgamesSvg'
import LiveSvg from './svg/LiveSvg'


const SidebarListCasino = ({flag, setActiveContent, elemStyles }) => {
   const handleClick = (contentId) => {
      setActiveContent(contentId);
   };
   
   return (
      <div className={flag ? styles.sidebarListCasinoCollapsed : styles.sidebarListCasino}>
         {!flag && (<div style={{marginBottom: '2px', fontSize: 'clamp(14px, 0.83333vw, 16px)', color: '#F5F8FF', textWrap: 'nowrap'}}>Casino Games</div>)}
         
         <div style={elemStyles} onClick={() => handleClick('Originals')}>
            <OriginalsSvg coll = '#576081'/>
            {!flag && (<>Originals</>)}
            
         </div>
         
         <div style={elemStyles} onClick={() => handleClick('Recently')}>
            <RecentlySvg coll = '#576081'/>
            {!flag && (<>Recently Played</>)}
         </div>
         
         <div style={elemStyles} onClick={() => handleClick('Popular')}>
            <img src="src\ui\frames\sidebar\frames\svg\Popular.png" alt=""  />
            {!flag && (<>Popular</>)}
         </div>

         <div style={elemStyles} onClick={() => handleClick('Slots')}>
            <SlotsSvg coll = '#576081'/>
            {!flag && (<>Slots</>)}
         </div>
         
         <div style={elemStyles} onClick={() => handleClick('Favourite')}>
            <FavouriteSvg coll = '#576081'/>
            {!flag && (<>Favourite</>)}
         </div>

         <div style={elemStyles} onClick={() => handleClick('Arcade')}>
            <ArcadeSvg coll = '#576081'/>
            {!flag && (<>Arcade // Skills</>)}
         </div>

         <div style={elemStyles} onClick={() => handleClick('Table')}>
            <TableSvg coll = '#576081'/>
            {!flag && (<>Table Games</>)}
         </div>

         <div style={elemStyles} onClick={() => handleClick('TV')}>
            <TvgamesSvg coll = '#576081'/>
            {!flag && (<>TV Games</>)}
         </div>

         <div style={elemStyles} onClick={() => handleClick('Live')}>
            <LiveSvg coll = '#576081'/> 
            {!flag && (<>Live Dealer</>)}
         </div>

         {flag ? (<div style={{width: '100%', height: '1px', background: '#202635'}}></div>) :
                    (<div style={{width: '100%', height: '1px', background: '#202635'}}></div>)}
      </div>

   )
}

export default SidebarListCasino