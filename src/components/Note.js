import { MdDeleteForever } from 'react-icons/md';
import {GrEdit} from 'react-icons/gr';
import {AiOutlineStar} from 'react-icons/ai'
// import {AiFillStar} from "react-icons/ai"
const Note = ({ notes,id, text, date, handleDeleteNote, handleUpdateNote, addToFavorites}) => {

	

	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>

				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
				<GrEdit onClick={()=> handleUpdateNote(id)} className='delete-icon'
					size='1.3em'/>
				
			 <AiOutlineStar onClick={addToFavorites(notes)} />
			</div>
		</div>
	);
};

export default Note;
