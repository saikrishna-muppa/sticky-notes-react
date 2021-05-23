import {useState} from 'react'
import { MdDeleteForever } from 'react-icons/md';
import {GrEdit} from 'react-icons/gr';
import {AiOutlineStar} from 'react-icons/ai'
import {AiFillStar} from "react-icons/ai"
const Note = ({ notes,id,fav, text, date, handleDeleteNote, handleUpdateNote, addToFavorites}) => {

	// const [isClicked, setIsClicked] = useState(false)
console.log(text,"notes")

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
				<GrEdit onClick={()=> handleUpdateNote(id,text)} className='delete-icon'
					size='1.3em'/>

              {/* {notes.map((item,idx)=>{

console.log({notes},"helo")
	            			  return(
					<div key={idx} >{item.fav ?<AiOutlineStar onClick={()=>addToFavorites(idx,item.fav)} />:<AiFillStar onClick={()=>addToFavorites(idx,item.fav)} />}</div>	
				  )
			  })} */}
			<div>{fav ?<AiOutlineStar onClick={()=>addToFavorites(id,fav)} />:<AiFillStar onClick={()=>addToFavorites(id,fav)} />}</div>	
			 {/* <AiFillStar onClick={()=>addToFavorites(id,notes.fav)?<AiFillStar/>:<AiOutlineStar/>} /> */}
			
			</div>
		</div>
	);
};

export default Note;
