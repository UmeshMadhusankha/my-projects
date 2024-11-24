import Navbar from './components/Navbar'
import Title from './components/Title'
import IntroImagesContainer from './components/IntroImagesContainer'
import Footer from './components/Footer'
import FeaturesContainer from './components/FeaturesContainer'
import bg_img from './assets/bg.jpg'
import Seperator from './components/Seperator'

function App() {

  const styles = {
    body: {
      backgroundImage: `url(${bg_img})`,
      backgroundPosition: 'center',
      position: 'relative', 
      top: '-18px',
    },
    inner_body: {
      backgroundColor: 'rgba(0,0,0,0.75)',
    },
    intro_imgcontainer: {
      height: "70vh"
    }
  }

  return (
    <div style={styles.body}>
      <div style={styles.inner_body}>
        <Navbar />
        <Seperator/>
        <Title />
        <div style={styles.intro_imgcontainer}>
          <IntroImagesContainer/>
        </div>
          <Seperator/>
          <FeaturesContainer />
          <Seperator/>
          <Footer />
        </div>
    </div>
  )
}

export default App
