import { useState } from "react";
import sendRequest from "../../utilities/send-request";
import { writeNote } from "../../utilities/notes-api";

export default function WriteNote({propUser}) {
    const [newNote, setNewNote] = useState({note: ''});

    async function handleAddNote(evt) {
        evt.preventDefault();
        const noteData = {text: newNote.note, user: propUser}
        const result = await writeNote(noteData)
        setNewNote({note: ''});
    }

    function handleChange(evt) {
        const newNoteData = {...newNote, [evt.target.name]: evt.target.value};
        setNewNote(newNoteData)
    }

    return(
        <>
        <form onSubmit={handleAddNote}>
            <div>
                <label htmlFor="Note">Note</label>
                <input 
                type="text"
                name="note"
                placeholder="Write a note"
                value={newNote.note}
                onChange={handleChange}
                />
            </div>
            <div>
                <button onSubmit={handleAddNote} type="submit" className="AddNoteBtn">
                    Add note
                </button>
            </div>
        </form>
        </>
    );
}