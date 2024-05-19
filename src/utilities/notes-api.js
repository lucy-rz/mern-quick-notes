export async function writeNote(newNote) {

    try{
    const response = await fetch('/notes/writenote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNote),
       
    });
    const createdNote = await response.json();
    console.log(createdNote)
    return createdNote;
} catch(error) {
        console.log(error)
    }
    
    }