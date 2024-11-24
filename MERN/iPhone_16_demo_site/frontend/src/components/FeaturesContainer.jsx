import { useRef } from 'react'
import Features from './Features'
import FeaturesExplained from './FeaturesExplained'
import fee1 from '../assets/fe_explained1.png'
import fee2 from '../assets/fe_explained2.png'
import fee3 from '../assets/fe_explained3.png'
import fe1 from '../assets/feature1.jpg'
import fe2 from '../assets/feature2.webp'
import fe3 from '../assets/feature3.webp'
import DescriptiveList from './DescriptiveList'

function FeaturesContainer() {
    const feature1 = useRef(null);
    const feature2 = useRef(null);
    const feature3 = useRef(null);

    const handleFeatureClick = (featureRef) => {
        featureRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const styles = {
        features_container : {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '15px',
          height: '55vh',
        },
        topic: {
            color: 'whitesmoke',
            textAlign: 'center',
            fontSize: '300%',
            fontFamily: "Georgia, 'Times New Roman', Times, serif"

        }
    }

    const data = [
        [
            {feature : 'Upgraded Main Sensor:', explanation : 'Better low-light and color accuracy'},
            {feature : 'Enhanced Ultra-Wide Lens:', explanation : 'Improved detail for landscapes'},
            {feature : 'Dedicated Camera Button:', explanation : 'Quick access to zoom and exposure'},
            {feature : 'AI Photo Enhancements:', explanation : 'Automatic color, tone, and sharpness adjustments'},
            {feature : '4K HDR Video:', explanation : 'Dolby Vision for richer contrast and color'}
        ],
        [
            {feature : 'Customizable Action Button:', explanation : 'Set to mute, open apps, or more'},
            {feature : 'Camera Control Button:', explanation : 'Quick access to camera settings'},
            {feature : 'Feedback on Placement:', explanation : 'Mixed reviews on button location'},
            {feature : 'Force Sensors:', explanation : 'Buttons respond to varying press intensity'},
            {feature : 'Improved Haptics:', explanation : 'Tactile feedback for a better feel'},
        ],
        [
            {feature : 'Real-Time Photo AI:', explanation : 'Enhances lighting and sharpness instantly'},
            {feature : 'Improved Siri:', explanation : 'Better at understanding complex commands'},
            {feature : 'Smart App Suggestions:', explanation : 'Tailored to user habits'},
            {feature : 'Object Recognition:', explanation : 'Identifies objects, text, landmarks'},
            {feature : 'Enhanced Privacy:', explanation : 'Processes data on-device for security'},
        ]
    ]

    return(
        <div>
            <h2 style={styles.topic}>Newly Added Features</h2>
            <div style={styles.features_container}>
                <Features url={fe1} onClick={() => handleFeatureClick(feature1)} topic={'Camera Improvements'}/>
                <Features url={fe2} onClick={() => handleFeatureClick(feature2)} topic={'Side Buttons'}/>
                <Features url={fe3} onClick={() => handleFeatureClick(feature3)} topic={'Apple Intelligence'}/>
            </div>
            <FeaturesExplained id = '1' ref={feature1} url={fee1}
                desc = {<DescriptiveList data={data[0]}/>}
            />
            <FeaturesExplained id = '2' ref={feature2} url={fee2}
                desc = {<DescriptiveList data={data[1]}/>}
            />
            <FeaturesExplained id = '3' ref={feature3} url={fee3}
                desc = {<DescriptiveList data={data[2]}/>}
            />
        </div>
    )
}

export default FeaturesContainer