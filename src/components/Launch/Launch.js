import styles from './Launch.css'

export default function Launch({props}){
    let preProps={...props}
    return(
      <div className={'Launch'}>
          <p>{props.mission_name} </p>
          <p>{props.launch_year}</p>

          <img src={preProps.links.mission_patch_small}/>
      </div>
);
}