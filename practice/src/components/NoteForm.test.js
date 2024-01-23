import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NoteForm from './NoteForm'

test('<NoteForm /> updates parent state and calls onSubmit', async () => {
    const user = userEvent.setup()
    const createNote = jest.fn()

    const { container } = render(<NoteForm createNote={createNote} />)

    const input = container.querySelector('#note-input')
    const sendButton = screen.getByText('Save')

    await user.type(input, 'testing a form...')
    await user.click(sendButton)

    expect(createNote.mock.calls).toHaveLength(1)
    expect(createNote.mock.calls[0][0].content).toBe('testing a form...')
})