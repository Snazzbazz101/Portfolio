import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="projects">
        <BentoGrid>
            {gridItems.map
            ((item) => (
                <BentoGridItem
                    id = {item.id}
                    key = {item.id}
                    title = {item.title}
                    description = {item.description}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid