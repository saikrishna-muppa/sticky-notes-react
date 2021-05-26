import {useState} from 'react'
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd';
import { MdDeleteForever } from 'react-icons/md';
import {GrEdit} from 'react-icons/gr';
import {AiOutlineStar} from 'react-icons/ai'
import {AiFillStar} from "react-icons/ai"
const Note = ({ notes,id,fav, text, date, handleDeleteNote, handleUpdateNote, addToFavorites}) => {

	const [characters, updateCharacters] = useState(notes);


function handleOnDragEnd(result) {
	if (!result.destination) return;
	const items = Array.from(characters);
const [reorderedItem] = items.splice(result.source.index, 1);
items.splice(result.destination.index, 0, reorderedItem);

updateCharacters(items);
}
	return (
<DragDropContext onDragEnd={handleOnDragEnd}>
	<Droppable droppableId="note">
	{(provided) => (
      <div className="note" {...provided.droppableProps} ref={provided.innerRef}>
	 {characters.map(({id},index)=>{
			 return(
				<Draggable key={id} draggableId={id} index={index} >
				{(provided)=>(
					
					 <div className="notes" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					 <span>{text}</span>
					 <div className='note-footer'>
						 <small>{date}</small>
						 {provided.placeholder}
						 <MdDeleteForever
							 onClick={() => handleDeleteNote(id)}
							 className='delete-icon'
							 size='1.3em'
						 />
						 <GrEdit onClick={()=> handleUpdateNote(id,text)} className='delete-icon'
							 size='1.3em'   />
							 
						 
		   
					 <div>{fav ?<AiFillStar onClick={()=>addToFavorites(id,fav)} />:<AiOutlineStar onClick={()=>addToFavorites(id,fav)} />}</div>	
					 
					 </div>
				 </div>
					
				)}
			</Draggable>
			 )
		 })
	 }
	  </div>
	)}
	
		
		</Droppable>
		</DragDropContext>

	);
};

export default Note;
