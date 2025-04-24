import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;

export default function ServiceItem(props) {
  
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src={props.img} alt="" />
        </div>
        <div className="col-sm-7">
          <h4 className='flex items-center'>
            <div className="service-icon">
              <FontAwesomeIcon icon={Icons[props.icon]} />
            </div>
            {props.title}</h4>
          <p className="m-0">{props.desc}</p>
        </div>
      </div>
    </div>
  )
}
