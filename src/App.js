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
    image: "/public/icon1.png"
  },
  {
    id: 2,
    title: "Components",
    text: "Build encapsulated components that manage their state.",
    image: "/public/icon2.png"
  },
  {
    title: "Single-way",
    text: "A set of immutable values are passed to the component's.",
    image: "/public/icon3.png"
  },
  {
    id: 3,
    title: "JSX",
    text: "Statically-typed. designed to run on modern browsers.",
    image: "/public/icon4.png"
  },
];

function Navbar(props) {
  return (
    <div className="navBar">
      {props.links.map((link) => {
        return (
          <a href="#">
            <img src="{link.image}" alt="{link.title}" />
          </a>
        );
      })}
    </div>
  );
}

function Cards(props) {
  return (
    <div className="card">
      <img src={props.card.image} alt={props.card.title}/>
      <h2>{props.card.title}</h2>
      <p>{props.card.text}</p>
    </div>
  );
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
              image: "/public/ironhack-logo.svg",
            },
            {
              id: 2,
              text: "MenuIcon",
              image: "/public/menu-top.svg",
            },
          ]}
        />

        <div className="header">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use <br/>the most popular frontend library,<br/> and
            become a super Ninja developer.
          </p>
          <a href="#">Awesome</a>
        </div>
      </div>

      <div className="cards-container">
        {arrCards.map((card) => (
          <Cards card={card} key={card.id} />
        ))}
      </div>
    </>
  );
}

export default App;
