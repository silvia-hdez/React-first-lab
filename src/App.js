import "./App.css";
// import icon1 from 'public/icon1.png'
// import icon2 from '../public/icon2.png'
// import icon3 from '../public/icon3.png'
// import icon4 from '../public/icon4.png'
// import logoIron from '../public/ironhack-logo.svg'
// import menuTop from '../public/menu-top.svg'

const arrCards = [
  {
    id: 1,
    title: "Declarative",
    text: "React makes it painless to create interactive UIs.",
  },
  {
    id: 2,
    title: "Components",
    text: "Build encapsulated components that manage their state.",
  },
  {
    title: "Single-way",
    text: "A set of immutable values are passed to the component's.",
  },
  {
    id: 3,
    title: "JSX",
    text: "Statically-typed. designed to run on modern browsers.",
  },
];

function Navbar(props) {
  return (
    <div className="navBar">
      {props.links.map((link) => {
        return <a href="#">{link.text}</a>;
      })}
    </div>
  );
}

function Cards(props) {
  return (
    <div className="card">
      <h2>{props.card.title}</h2>
      <p>{props.card.text}</p>
    </div>
  )
}

function App() {
  return (
    <>
      <div className="App">
        <Navbar
          links={[
            { 
              id: 1,
              text: "Ironimg",
              // img: logoIron
            },
            {
              id: 2,
              text: "MenuIcon",
              // img: menuTop
            },
          ]}
        />
      </div>

      <div className="header">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <a href="#">Awesome</a>
      </div>

      <div className="cards-container">
          {arrCards.map((card) => <Cards card={card} key={card.id}/> )}
      </div>
    </>
  );
}

export default App;
