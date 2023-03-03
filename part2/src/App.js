import './App.css';
import { Note } from './Note';
import { useState } from 'react';



const App = (props) => {
  
  // notes: el estado con todas las notas 
  // setNotes: la forma de actualizar las notas
  // el estado inicial se hace con lo que llega por las props
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteAddToState = {
      id: notes.length+1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5

    }
    // ojo, siempre array nuevo, no mutar el original
    setNotes([...notes, noteAddToState]);
    setNewNote('');
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  }
 
  //<--el último botón del formulario funciona como submit-->
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        { showAll ? 'Show only important': 'Show all'}
      </button>
      
      <ul>
        {notes
          .filter((note) => {
            if (showAll) return true;
            return note.important === true
          })
          .map((note) => (
            <Note key={note.id} {...note} />
          ))
        
          // otra forma de hacerlo
          //.map((note) => <Note key={note.id} {...note} />)}

        }

        

      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
    </div>
  );
}

export default App;
