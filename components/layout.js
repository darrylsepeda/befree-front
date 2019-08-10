import Header from "./header";
import "../style.css";

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
