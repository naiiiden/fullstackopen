import ReactDOM from "react-dom/client";

const Welcome = ({ name }: { name : string }) => {
  return <h1>Hello, {name}</h1>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Welcome name='Sarah'/>
)