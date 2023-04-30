export default function Album({props}){
    const albumKeys=Object.keys(props);
    return(
      <div>
          <ul>
              {albumKeys.map((key)=>(
                  <li key={key}>
                      {key}:{props[key]}
                  </li>
              ))}

          </ul>
      </div>
);
}