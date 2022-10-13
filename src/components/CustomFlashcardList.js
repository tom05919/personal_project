import React from 'react'
import CustomFlashcard from './CustomFlashcard'

export default function CustomFlashcardList( {flashcards} ) {
  return (
    <div className="card-grid">
        {flashcards.map(flashcard => {
            return <CustomFlashcard flashcard={flashcard} key={flashcard.id} />
        })}
        </div>
  )
}

