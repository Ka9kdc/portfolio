import React from 'react'
import { useParams } from 'react-router'
import projectData from './hackathonProjectData'

const SingleProject = () => {
const id = useParams().id
const project = projectData[id]

return (
    <article>
        <h1 className="section_title">{project.title}</h1>
        <section>
            {project.links.map((link) => {
                return <a href={link.url} key={`${link.name}:${link.url}`}>{link.name}</a>
            })}
        </section>
        <section>
            {project.text.map((fact,idx) =>{
                return <p key={project.title +":"+ idx}>{fact}</p>
            })}
        </section>
    </article>
)


}

export default SingleProject
