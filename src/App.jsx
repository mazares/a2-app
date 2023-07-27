import "./App.css";

import Header from "./components/Header";

import Content from "./components/Content";

import Footer from "./components/Footer";

export default function App() {
  const sectionNames = [`header`, `content`, `footer`];

  return (
    <div className="app">
      <Header headertext={sectionNames[0]} />

      <Content contenttext={sectionNames[1]} />

      <Footer footertext={sectionNames[2]} />
    </div>
  );
}
