import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// _app.js
// import { PrimeReactProvider } from 'primereact/api';
// import BrowserPage from './Browser/BrowserPage';

// //theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";

// //core
// import "primereact/resources/primereact.min.css";


// export default function MyApp({ Component, pageProps }) {
//   return (
//     <PrimeReactProvider>
//       {/* <Component {...pageProps} /> */}
//       <BrowserPage />
//     </PrimeReactProvider>
//   );
// }
