import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";


const App = () =>{

  return (
    <>
    <Header></Header>
    <main>
      <section>
        <TaskCard priority="Hög" category="Frontend" assignee="Armin" description="Bygg formuläret för kontakt sidan till appen" id={1} title="Bygga formulär"></TaskCard>
      </section>
      <section>
        <TaskCard priority="Låg" category="Design" assignee="Adam" description="Finslipa header till appen" id={2} title="Finslipa header"></TaskCard>
      </section>
      <section>
        <TaskCard priority="Medel" category="Test" assignee="Anna" description="Skriv tester för formuläret till appen" id={3} title="Skriv tester"></TaskCard>
      </section>
    </main>
    <Footer></Footer>
    </>
    

  )
};


export default App;