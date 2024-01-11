import styles from './ContentHome.module.css'
import HomeBunners from './frames/HomeBunners'
import HomeSlider from './frames/HomeSlider'
import HomeSliderRecently from './frames/HomeSliderRecently'
import HomeTable from './frames/HomeTable'

const ContentHome = ({scale}) => {
   
   const imageUrlsOriginal = [
      '/frames/HomeSlider/1.png',
      '/frames/HomeSlider/2.png',
      '/frames/HomeSlider/3.png',
      '/frames/HomeSlider/4.png',
      '/frames/HomeSlider/5.png',
      '/frames/HomeSlider/6.png',
      '/frames/HomeSlider/7.png',
      '/frames/HomeSlider/1.png',
      '/frames/HomeSlider/2.png',
      '/frames/HomeSlider/3.png'];
   const imageUrlsGames = [
      '/frames/HomeSlider/a1.png',
      '/frames/HomeSlider/a2.png',
      '/frames/HomeSlider/a3.png',
      '/frames/HomeSlider/a4.png',
      '/frames/HomeSlider/a5.png',
      '/frames/HomeSlider/a6.png',
      '/frames/HomeSlider/a7.png',
      '/frames/HomeSlider/a1.png',
      '/frames/HomeSlider/a2.png',
      '/frames/HomeSlider/a3.png'];
   const imageUrlsGames2 = [
      '/frames/HomeSlider/a3.png',
      '/frames/HomeSlider/a4.png',
      '/frames/HomeSlider/a5.png',
      '/frames/HomeSlider/a6.png',
      '/frames/HomeSlider/a7.png',
      '/frames/HomeSlider/a1.png',
      '/frames/HomeSlider/a2.png',
      '/frames/HomeSlider/a3.png',
      '/frames/HomeSlider/a1.png',
      '/frames/HomeSlider/a2.png',
      '/frames/HomeSlider/a2.png',
      '/frames/HomeSlider/a2.png',
      '/frames/HomeSlider/a2.png',
      '/frames/HomeSlider/a2.png',];

   const imageUrlsGames3 = [

      '/frames/HomeSlider/a5.png',
      '/frames/HomeSlider/a6.png',
      '/frames/HomeSlider/a7.png',
      '/frames/HomeSlider/a1.png',
      '/frames/HomeSlider/a2.png',
      '/frames/HomeSlider/a3.png',
      '/frames/HomeSlider/a1.png',
      '/frames/HomeSlider/a2.png',];

   return (
      <div className={styles.home}>
         <div className={styles.bgFrame}>
            <div className={styles.bgFrameContent}>
               <div className={styles.bgFrameContentText}>
                  Deposit and get UP TO 1000% + 250FS
                  <div style={{textTransform: 'none', fontSize: '20px',fontWeight: '500', lineHeight: 'normal'}}>Get bonus for every deposit!</div>
               </div>
               <button className={styles.bgFrameButton}>Get Bonus</button>
            </div>
         </div>

         <HomeBunners />
         <HomeSlider text = 'original games' images={imageUrlsOriginal.map((url, index) => (<img key={`${url}-${index}`} src={url} alt="Description" />))}/>
         <HomeSlider text = 'popular' images={imageUrlsGames.map((url, index) => (<img key={`${url}-${index}`} src={url} alt="Description" />))}/>
         <HomeSlider text = 'new game' images={imageUrlsGames2.map((url, index) => (<img key={`${url}-${index}`} src={url} alt="Description" />))}/>
         <HomeSlider text = 'hot game' images={imageUrlsGames3.map((url, index) => (<img key={`${url}-${index}`} src={url} alt="Description" />))}/>
         <HomeSliderRecently text = 'recently'/>
         <HomeTable />
         
         

      </div>
   )
}

export default ContentHome