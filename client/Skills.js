import React from 'react'
import librariesUsed from './LibrariesObject'
import TechUsed from './Projects/TechUsed'
import './Skills.css'


const Skills = () => {
    const libraries = Object.keys(librariesUsed)
    return (
        <div>
            <h1 className="section_title">Skills</h1>
            <section>
            {libraries.map((tech => {
                const {comfortLevel, transparent, key } = librariesUsed[tech]
                return <div key={key} className={`${comfortLevel} white`} ><TechUsed tech={tech} /></div>
            }))}
            </section>
        </div>
    )

}

export default Skills