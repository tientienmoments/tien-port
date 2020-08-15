import React from 'react'
import './style.css'
import ProjectCard from '../ProjectCard/index'

const Portfolios = () => {
  return (
    <div id='portfolios' className='dn-portfolio-general'>
      <div className='container'>
        <h1 className='portfolio-head'><strong>PORTFOLIO</strong></h1>

        <div className='dn-portfolio-underline1'></div>
        <div style={{ 'height': '5px' }}></div>
        <div className='dn-portfolio-underline2'></div>

        <h4 className='dn-checkout-projects'>Check out my latest projects</h4>
      </div>

      <div className='dn-portfolio'>
        <div id="carouselExampleIndicators" interval={1000} className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li className='dn-carousel-indicator active' data-target="#carouselExampleIndicators" data-slide-to="0"></li>
            <li className='dn-carousel-indicator' data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>

          <div className="carousel-inner dn-carousel-inner">
            <div className="carousel-item active">
              <div className='row mb-5 d-flex justify-content-center'>
                <ProjectCard
                  imgLink="https://i.ibb.co/fnh2S8p/Netflixdb.png"
                  badges={['ReactJS', 'MovieDB API', 'Bootstrap', 'JQuery', "Filter & Sort Engine"]}
                  title={'Movie Database of Netflix'}
                  netlify='https://netflix-db.netlify.app'
                  repo={'https://github.com/dungngo99/CoderSchool-NetflixDB'}
                />

                <ProjectCard
                  imgLink="https://i.ibb.co/7b22D5z/Socialblog.png"
                  badges={['ReactJS', "Axios", 'Redux', 'Router', 'Bootstrap', "Error Handling"]}
                  title={'Social Blog of Gurus'}
                  netlify='https://social-blog-team2.netlify.app'
                  repo={'https://github.com/dungngo99/CoderSchool-SocialBlog'}
                />
              </div>

              <div className='row mt-5 d-flex justify-content-center'>
                <ProjectCard
                  imgLink="https://i.ibb.co/fkGZfFS/Weather-App.png"
                  badges={["OpenWeather API", 'Bootstrap', 'HTML', 'JS', "CSS"]}
                  title={'UI-designed Weather App'}
                  netlify='https://weather-app-dungngo.netlify.app'
                  repo={'https://github.com/dungngo99/CoderSchool-WeatherApp'}
                />

                <ProjectCard
                  imgLink="https://i.ibb.co/Vw0ZbTM/Flappy-Bird.png"
                  badges={["Bootstrap", 'HTML', 'JS', "CSS"]}
                  title={'Old-school Flappy Bird<'}
                  netlify='https://dungngo-flappy-bird.netlify.app'
                  repo={'https://github.com/dungngo99/CoderSchool-FlappyBird'}
                />
              </div>
            </div>

            <div className="carousel-item">
              <div className='row mb-5 d-flex justify-content-center'>
                <ProjectCard
                  imgLink="https://i.ibb.co/VCyzRxJ/Space-Invader.png"
                  badges={["Bootstrap", 'HTML', 'JS', "CSS"]}
                  title={'Legendary Space Invader'}
                  netlify='https://coderschool-spaceinvader.netlify.app'
                  repo={'https://github.com/dungngo99/CoderSchool-SpaceInvader'}
                />

                <ProjectCard
                  imgLink="https://i.ibb.co/ys4vXCJ/TodoApp.png"
                  badges={['Bootstrap', 'HTML', 'JS', "CSS"]}
                  title={'Productive Todo App'}
                  netlify='https://coderschool-todolist-dungngo.netlify.app'
                  repo={'https://github.com/dungngo99/CoderSchool-TODOList'}
                />
              </div>

              <div className='row mt-5 d-flex justify-content-center'>
                <ProjectCard
                  imgLink="https://i.ibb.co/P9yknsY/Guessing-Game.png"
                  badges={['Async, Await, & Promise', 'Bootstrap', 'HTML', 'JS', "CSS"]}
                  title={'An "Easy" Guessing Game'}
                  netlify='https://dungngo-guessinggame.netlify.app'
                  repo={'https://github.com/dungngo99/CoderSchool-GuessingGame'}
                />

                <ProjectCard
                  imgLink="https://i.ibb.co/YhH9LrN/tictactoe.png"
                  badges={['ReactJS', 'HTML', 'JS', "CSS"]}
                  title={'Vietnamese TicTacToe'}
                  netlify='https://app.netlify.com/sites/tictactoe-dungngo'
                  repo={'https://tictactoe-dungngo.netlify.app'}
                />
              </div>
            </div>
          </div>

          <div className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" style={{ 'width': '170px' }}>
            <div className="carousel-control-prev-icon" aria-hidden="true" style={{ 'backgroundColor': 'black', 'width': '30px', 'height': '30px' }}></div>
            <span className="sr-only">Previous</span>
          </div>

          <div className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" style={{ 'width': '170px' }}>
            <div className="carousel-control-next-icon" aria-hidden="true" style={{ 'backgroundColor': 'black', 'width': '30px', 'height': '30px' }}></div>
            <span className="sr-only">Next</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolios
