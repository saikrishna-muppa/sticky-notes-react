import {useState} from 'react'
import { DragDropContext,Droppable,Draggable  } from 'react-beautiful-dnd';
import { MdDeleteForever } from 'react-icons/md';
import {GrEdit} from 'react-icons/gr';
import {AiOutlineStar} from 'react-icons/ai'
import {AiFillStar} from "react-icons/ai"
const Note = ({ notes,id,fav,index, text, date, handleDeleteNote, handleUpdateNote, addToFavorites}) => {

	return (
<div className="note-header-container" >
					<Draggable key={id}  draggableId={id} index={index} >
				{(provided)=>(
					<div className='note' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}  >
					<span>{text}</span>
					<div className='note-footer'>
						<small>{date}</small>
		
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
			
			</div>

	);
};

export default Note;
