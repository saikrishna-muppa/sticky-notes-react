import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import { DragDropContext,Droppable  } from 'react-beautiful-dnd';
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "21/05/2021",
    },
  ]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const [newText, setNewText] = useState("");

  

const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      fav: false,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };


  // const updateNote = (id,updtedTask) => {
    
  //   const allItems = [...notes];
  //   console.log(allItems.text,"text")
  //   const itemIndex = allItems.findIndex((item) => item.id === id);
    
  //   allItems[itemIndex].text = newText;
  //   console.log(allItems,"items")
  //   setNotes(allItems);
  // };

  const submitEdits = (event, idToEdit) => {
    const date = new Date();
    event.preventDefault();

    const updatedNotes = notes.map((note) => {
      if (note.id === idToEdit) {
        return {
          id: note.id,
          text: event.target.note.value,
          date: date.toLocaleDateString(),
          fav:note.fav
        };
      } else {
        return note;
      }
    });
    setNotes(updatedNotes);
    //setNoteEditing("");
  };


  const addToFavorites = (id) => {
    console.log("id prop", id);
    const allItems = [...notes];
    const itemIndex = allItems.findIndex((item) => item.id === id);
    allItems[itemIndex].fav = !allItems[itemIndex].fav;
    setNotes(allItems);
    console.log("itemIndex", itemIndex);
  };




function handleOnDragEnd(result) {
	
	if (!result.destination) return;
	const items = Array.from(notes);
	const [reorderedItem] = items.splice(result.source.index, 1);
	items.splice(result.destination.index, 0, reorderedItem);
	console.log(result.destination,"destination")
  
	setNotes(items);
}


  return (
    <DragDropContext  onDragEnd={handleOnDragEnd}>
		<Droppable droppableId="contaner" >
			{(provided)=>(
				<div className="container" {...provided.droppableProps} ref={provided.innerRef}>
        <NotesList
          notes={notes}
          newText={newText}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
         
          addToFavorites={addToFavorites}
          setNotes={setNotes}
          submitEdits={submitEdits}
        />
         {provided.placeholder}
      </div>
     
			)}
			
		</Droppable>
    
		</DragDropContext>
    
  );
}

export default App;
