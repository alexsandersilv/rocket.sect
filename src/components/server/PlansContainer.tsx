import { PlansPropsType } from '../../types/components/index';

const PlanContainer = (props: PlansPropsType) => {

  return (
  <div className="plan">
    <strong className="title">{props.title}</strong>
    <span>{props.description}</span>
    <ul>
      {props.enabledFunctions.map(item => {
        return (
          <li key={`key_${item}`}>
            {item}
          </li>
        );
      })}

      {props.disabledFunctions.map(item => {
        return ( 
          <li key={`key_${item}_disabled`} className="blocked">
            {item}
          </li>
        )
      })}
    </ul>

    <button>{props.prince}</button>
  </div>
  )
};

export default PlanContainer;