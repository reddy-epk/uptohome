import React from 'react'
import {useNavigate} from 'react-router-dom'
import {FaPodcast} from 'react-icons/fa6'
import Header from '../HeaderL'
import './index.css'

const Projects = () => {
  const navigate = useNavigate()
  const projectNames = JSON.parse(localStorage.getItem('projectNames')) || []
  const projectCards = []

  const NewProject = () => {
    navigate('/')
  }

  const getInitials = name => {
    const words = name.split(' ')
    let initials = ''
    for (let i = 0; i < words.length; i++) {
      initials += words[i][0]
    }
    return initials.toUpperCase()
  }

  projectNames.forEach((name, index) => {
    const card = (
      <div key={index} className='card'>
        <div className='card-image height-adjust'>{getInitials(name)}</div>
        <div className='card-content'>
          <div>
            <h3 className='card-title'>{name}</h3>
          </div>
          <p>{new Date().toLocaleString()}</p>
        </div>
      </div>
    )
    projectCards.push(card)
  })

  return (
    <div>
      <Header />
      <div className='main-container'>
        <div className='projects-container'>
          <h1>Projects</h1>
          <button type='button' id='podcasty-button' onClick={NewProject}>
            <FaPodcast className='podcasty-icon' />
            <span>Create a New PodCast</span>
          </button>
        </div>
        <div className='projects-list-container'>{projectCards}</div>
      </div>
    </div>
  )
}

export default Projects
