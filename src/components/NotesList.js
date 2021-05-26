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
			<AddNote handleAddNote={handleAddNote}  />
			{notes.map((note,idx)=>{
				return (
					<Note 
					
					key={idx}
					index={idx}
					notes={notes}
					fav={note.fav}
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
					handleUpdateNote={handleUpdateNote}
					addToFavorites={addToFavorites}
					/>
					
				)
			})}
			
			
		</div>
	);
};

export default NotesList;
