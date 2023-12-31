
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  {id:1, content: "przejść na Reacta", done:true},
  {id:2, content: "zjeść obiad", done:true},
];

const hideDoneTask = false;

function App() {
  return (
    <Container>
    <Header title="Lista zadań" />
    <Section 
    title="Dodaj nowe zadanie" 
    body={ <Form />} 
    />

    <Section
    title="Lista zadań"
    body={<Tasks tasks={tasks} hideDoneTask={hideDoneTask}/>}
    extraHeaderContent={  <Buttons tasks={tasks}  hideDoneTask={hideDoneTask}/>} 
   />
    
</Container>
  );
}

export default App;
