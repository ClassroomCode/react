
export function Jumbotron(props: any) {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}