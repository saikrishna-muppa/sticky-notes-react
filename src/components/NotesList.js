import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
	handleUpdateNote,
	addToFavorites
}) => {

	  
	// console.log(notes,"notes")
	 
	return (
		<div className='notes-list'>
			{notes.map((note)=>{
				return (
					<Note 
					notes={notes}
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
					handleUpdateNote={handleUpdateNote}
					addToFavorites={addToFavorites}
					/>
				)
			})}
			<AddNote handleAddNote={handleAddNote} />
			
		</div>
	);
};

export default NotesList;
