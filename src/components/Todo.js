

export default function Todo({props}){

    const todoKeys = Object.keys(props);

    return(
      <div>
          <ul>
              {todoKeys.map((key) => (
                  <li key={key}>
                      {key}:{props[key]}
                  </li>
              ))}
          </ul>
      </div>
);
}
