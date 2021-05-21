import './App.css';
import {useState,useEffect} from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';


function App() {

  const [notes,setNotes]=useState([
    {
			id: nanoid(),
			text: 'This is my new note!',
			date: '21/05/2021',
		}
  ])

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

//   const [items, setItems] = useState([notes]);
  
	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
      // item:"",
      // editItem:false,
      fav: false,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
    // console.log(newNotes,"delete")
		setNotes(newNotes);
	};
const updateNote=(id)=>{
  //  const newNotes = notes.filter((note) => note.id !== id);
  // const selectedItem=notes.find((item)=>item.id ===id)
  // console.log(selectedItem,"selected")
  //    setNotes({selectedItem})
  // console.log({newNotes,text:selectedItem.text,id})

	// setNotes({newNotes,text:selectedItem.text,id});
}
const makeFav = (id) => {
  console.log("id ", id);


  
  const allItems = [...notes];
  const itemIndex = allItems.findIndex((item) => item.id === id);
  allItems[itemIndex].fav = !allItems[itemIndex].fav;
  setNotes(allItems);
  console.log("itemIndex", itemIndex);
};

  return (
    <div className="container">
    <NotesList
    notes={notes}
					// notes={notes.filter((note) =>
					// 	note.text.toLowerCase()
					// )}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
          handleUpdateNote={updateNote}
          addToFavorites={makeFav}
				/>
     
    </div>
  );
}

export default App;
