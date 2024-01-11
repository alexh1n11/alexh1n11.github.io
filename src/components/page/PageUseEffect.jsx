import { useEffect, useRef } from 'react';
import styles from './Page.module.css';

const PageUseEffect = (isFirstRun, widgetCollapse, setScale) => {
    const prevWidgetCollapse = useRef(widgetCollapse);
   
    useEffect(() => {
        const updateScale = () => {
          const page = document.querySelector(`.${styles.page}`);
          const children = page.children;
          let workzoneWidth = 0;
          let totalTrueWidth = 0;
          let newScale = 1;
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const computedStyle = window.getComputedStyle(child);
            const width = parseFloat(computedStyle.getPropertyValue('width'));
            const margin = parseFloat(computedStyle.getPropertyValue('margin-left')) + parseFloat(computedStyle.getPropertyValue('margin-right'));
            const padding = parseFloat(computedStyle.getPropertyValue('padding-left')) + parseFloat(computedStyle.getPropertyValue('padding-right'));
          
            const trueWidth = width + margin + padding;
            
            if (i === 0 || i === 2) {
              totalTrueWidth += trueWidth;
            } else {
              workzoneWidth = trueWidth;
            }
          };   
    
          const pageWidth = page.clientWidth;  
          const availableSpace = pageWidth - totalTrueWidth;
    
          if (availableSpace <= workzoneWidth) {
            newScale = availableSpace / workzoneWidth; 
            if (isFirstRun.current) { 
              isFirstRun.current= false;
              
            }    
          }
          setScale(newScale);
        };
        const handleLoad = () => {
          updateScale();
        };
        
        const handleResize = () => {
          if (window.innerWidth < 1921) {
            updateScale();    
          }
        };
    
        if (isFirstRun.current) {
          updateScale();
        };
        
        if (widgetCollapse !== prevWidgetCollapse.current){
          prevWidgetCollapse.current = widgetCollapse;
          updateScale();
        }
     
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleLoad);
        return () => {
          
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('load', handleLoad);
        };
        
      }, [widgetCollapse]);
}
export default PageUseEffect;