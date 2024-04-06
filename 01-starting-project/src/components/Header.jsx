import reactImages from '../assets/react-core-concepts.png'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

export default function Header() {
    const discription = reactDescriptions[genRandomInt(2)];
    return (
      <header>
        <img src={reactImages} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {discription} React concepts you will need for almost any app you are going to build!
        </p>
      </header>
    );
  }