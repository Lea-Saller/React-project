import { useEffect } from "react"
import { editBusinessData, getBusinessData } from '../data/businessDataServer';
import businessStore from '../data/businessDataStore'
import loginStore from "../data/loginStore";
import { observer } from "mobx-react";
import '../../styles/Business.css'
import EditBusinessData from './EditBusinessData';
// import {ReactComponent as logo} from 'src/images/ExceptionLogo.svg'
const BusinessData = observer(() => {
  useEffect(() => {
    getBusinessData()
  }, [])
  return (
    <>

      <div >
        <div className="header">
          <img id="logo" src="../../../public/logo.png" alt="jewelry" />
          <h1>{businessStore.businessData.name}</h1>
          <p className="businessP">address : {businessStore.businessData.address}</p>
          <p className="businessP">phone : {businessStore.businessData.phone}</p>
          <p className="businessP">owner : {businessStore.businessData.owner}</p>
          {loginStore.isLogin && <EditBusinessData />}
        </div>
          <div className="desc"> <p className="businessP">description : {businessStore.businessData.description}</p></div>
        <img id="primaryImg" src="../../../public/jewelry.jpg" alt="jewelry" />
      </div>


    </>
  );
})

export default BusinessData