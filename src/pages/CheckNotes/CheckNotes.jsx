import { useState, useEffect } from "react";
import sendRequest from "../../utilities/send-request";

export default function CheckNotes({propUser}) {
    const [allNotes, setAllNotes] = useState();

    async function getAllNotes() {
        const response = await sendRequest('/notes/checknotes', 'GET')
        console.log(response)
        return setAllNotes(response)
    };

    useEffect(() => {
        getAllNotes();
    }, [])


    return(
        <>
            {allNotes && (
                <div>
                    <h1>check notes</h1>
                    <div className="NoteList">
                        {allNotes.map((n, idx) => (<div>
                            <ul>{n.text} - {n.createdAt.toLocaleString()}</ul>
                        </div>))}
                    </div>
                </div>
            )}
        </>
    );
}