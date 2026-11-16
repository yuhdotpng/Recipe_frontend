import Hero from '../components/Hero'
import './Home.css'
import banner from '../assets/banner.jpg'

function HomePage() {
    return(
        <div className = 'HomePage'>
            <Hero
                title = 'Welcome to Recipe site'
                image = {banner}
                alt = 'Recipe Website banner'
                subtitle= 'Discover and save delicious recipes!'
                callToAction='Start Searching!'
            />
            <div className='intro'>
                <h2>Why use us?</h2>
                <p>Recipe site is a great way to find and collect recipes all in one place! 
                </p>
            </div>
      </div>
    )
    }

export default HomePage;