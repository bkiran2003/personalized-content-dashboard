import ContentCard from './ContentCard'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import React, { useState, useEffect } from 'react'
import { ContentItem } from '../features/feed/feedSlice'
import { motion } from 'framer-motion'

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

export default function FeedSection({ search }: { search: string }) {
  const feed = useSelector((state: RootState) => state.feed.items)
  const loading = useSelector((state: RootState) => state.feed.loading)
  const [ordered, setOrdered] = useState(feed)

  useEffect(() => { setOrdered(feed) }, [feed])

  let filtered: ContentItem[] = ordered.filter(item =>
    !search ||
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  )

  function onDragEnd(result: any) {
    if (!result.destination) return
    const arr = Array.from(ordered)
    const [removed] = arr.splice(result.source.index, 1)
    arr.splice(result.destination.index, 0, removed)
    setOrdered(arr)
  }

  return (
    <section id="feed">
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-purple-500 rounded-full border-t-transparent animate-spin"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your personalized content...</p>
        </div>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="feed-cards">
            {(provided) => (
              <motion.div 
                ref={provided.innerRef} 
                {...provided.droppableProps}
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {filtered.map((item, idx) => (
                  <Draggable key={item.id} draggableId={item.id} index={idx}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          opacity: snapshot.isDragging ? 0.8 : 1,
                          transform: snapshot.isDragging 
                            ? `${provided.draggableProps.style?.transform} rotate(2deg)`
                            : provided.draggableProps.style?.transform
                        }}
                      >
                        <ContentCard item={item} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </motion.div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </section>
  )
}