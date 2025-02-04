import React from 'react'
import SkillCard from '../cardcomponents/SkillCard'

const Skills = () => {
  return (
    <div className='my-14' >
        <div className="text-center mb-16" id='skills'>
        <span className="sectionhead text-4xl">What i do?</span>
        <div className="border-t-4 border-indigo-700 my-4 w-16 mx-auto"></div>
        </div>
        <SkillCard />
        <div className="border-t-4 border-indigo-700 my-4 w-[50%] mx-auto mt-20"></div>
        </div>

  )
}

export default Skills
