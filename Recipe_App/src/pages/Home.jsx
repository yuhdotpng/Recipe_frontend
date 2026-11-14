import Hero from '../components/Hero'
import './Home.css'

function HomePage() {
    return(
        <div className = 'HomePage'>
            <Hero
                title = 'Welcome to Recipe site'
                image = 'https://www.ning.com/wp-content/uploads/2019/05/create-food-website.jpg'
                alt = 'Recipe Website banner'
                subtitle= 'Discover and save delicious recipes!'
                callToAction='Shop Now'
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