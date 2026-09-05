import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";

const App = () => {
  return (
    <body>
      <Header></Header>
      <main>
        <section className="taskcard-container">
          <TaskCard
            priority="Hög"
            category="Frontend"
            assignee="Armin"
            description="Bygg formuläret för kontakt sidan till appen"
            id={1}
            title="Bygga formulär"
          ></TaskCard>
          <TaskCard
            priority="Låg"
            category="Design"
            assignee="Adam"
            description="Skapa global header för appen"
            id={2}
            title="Skapa header"
          ></TaskCard>
          <TaskCard
            priority="Medel"
            category="Test"
            assignee="Anna"
            description="Skriv tester för formuläret till appen"
            id={3}
            title="Skriv tester"
          ></TaskCard>
        </section>
      </main>
      <Footer></Footer>
    </body>
  );
};

export default App;
