import { useMemo } from "react";
import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal} from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
  const {users, useFavDocs} = useContext(ContextGlobal);

  const memoFavs = useMemo(() => {
    let list = [];
    users.map(user => {
      if (useFavDocs.includes(user.id)) {
      list.push(user);
    }
  }
  )
  return list
  })
    
  return (
    <div className="main">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {memoFavs.map(user => (<Card nombre={user.nombre} key={user.id} id={user.id} username={user.usernombre}></Card>))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};


export default Favs;