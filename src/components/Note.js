import {useState} from 'react'
import { DragDropContext,Droppable,Draggable  } from 'react-beautiful-dnd';
import { MdDeleteForever } from 'react-icons/md';
import {GrEdit} from 'react-icons/gr';
import {AiOutlineStar} from 'react-icons/ai'
import {AiFillStar} from "react-icons/ai"
const Note = ({ notes,id,fav,index, text,submitEdits, date, handleDeleteNote, handleUpdateNote, addToFavorites,setNotes,newText}) => {



	const COLORS = [
  { name: "SteelBlue", code: "#4863A0" },
  { name: "Blue Ivy", code: "#3090C7" },
  { name: "Cream", code: "#FFFFCC" },
  { name: "	Taupe", code: "#483C32" },
  { name: "Violet", code: "#8D38C9" },
  { name: "Rust", code: "#C36241" },
  { name: "Halloween Orange", code: "#E66C2C" },
  { name: "Cotton Candy", code: "#FCDFFF" },
  { name: "Magenta", code: "#FF00FF" },

]
const [noteEditing, setNoteEditing] = useState('')

const [notecolor, setcolor] = useState("#FFA500")
const [hover, sethover] = useState(false)

let styles = { backgroundColor: notecolor }

	return (

					<Draggable key={id}  draggableId={id} index={index} >
				{(provided, snapshot) => (id !== noteEditing ? <div ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps} >
					<div className='note'  onMouseEnter={() => { sethover(true) }} onMouseLeave={() => { sethover(false) }}  style={styles}  >
				{hover && <div><select value={notecolor} onChange={(e) => { setcolor(e.target.value) }}>{COLORS.map((color) => <option value={color.code}>{color.name}</option>)}</select></div>}
					<div className="note-text" >{text}</div>
					<div className='note-footer'>
						<small>{date}</small>
		
						<MdDeleteForever
							onClick={() => handleDeleteNote(id)}
							className='delete-icon'
							size='1.3em'
						/>
						<GrEdit onClick={() => setNoteEditing(id)} className='delete-icon'
							
							size='1.3em'   />
						
		
					<div>{fav   ?<AiFillStar className='delete-icon' onClick={()=>addToFavorites(id,fav)} />:<AiOutlineStar className='delete-icon' onClick={()=>addToFavorites(id,fav)} />}</div>	
					
					</div>
				
</div>
				</div>
					:
					<div className='note new' ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}>
				<form onSubmit={(event) => { submitEdits && submitEdits(event, id); setNoteEditing("") }}>
					<textarea
						rows='8'
						cols='10'
						name="note"
						placeholder='Type to add a note...'
						defaultValue={text}
						style={{width:"100%"}}
					></textarea>
					<div className='note-footer'>
	
						<button className='save' type="submit"   >
							Save
					</button>
					</div>
				</form>
			</div>
				)}
			</Draggable>
			

	);
};

export default Note;
