import styles from './SidebarSettings.module.css'
import ToggleButton from '../buttons/ToggleButton'
import HelpSvg from './svg/HelpSvg'

const SidebarSettings = ({flag}) => {
 return (
   <>
      <div className={flag ? styles.settingsCollapsed: styles.settings}>
         <div style={{display: 'flex', gap: '12px'}}>
            <ToggleButton />
            <div style={{display: 'flex',flexDirection:'column',justifyContent: 'center'}}>
               <span style={{color: '#F5F8FF', fontSize: '14px'}}>Dark mode</span>
               <span style={{fontSize: '14px'}}>Currently</span>
            </div>
         </div>
         <button style={
            {display: 'flex',
             alignItems: 'center', 
             width: '100%', 
             height: '40px', 
             background: '#171E2F',
             borderRadius: '20px',
             padding: '12px 18px',
             gap: '12px'}
         }>
            <img src="src\ui\frames\sidebar\frames\svg\US.png" alt="" />
            English
         </button>

         <button style={
            {display: 'flex',
             alignItems: 'center', 
             width: '100%', 
             height: '40px', 
             background: '#171E2F',
             borderRadius: '20px',
             padding: '12px 18px',
             gap: '12px'}
         }>
            <HelpSvg />
            Live Support
         </button>
      </div>
   </>
 )
}

export default SidebarSettings