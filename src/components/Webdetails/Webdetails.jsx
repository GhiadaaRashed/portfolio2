import Webstyle from '../Webstyle/Webstyle'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projectdetails } from '../../../data/infor';
const Webdetails = () => {
  const { id } = useParams()
  const [data,setdata]=useState([])
  useEffect(() => {
    if (projectdetails[id-1].id==id) {
      setdata(projectdetails[id-1]);
    }
  }, []);
  return (
    <div>
      <Webstyle title={data.title} des={data.des} img={data.img} icon={data.iconLists} linkcode={data.linkcode}/>
    </div>
  )
}

export default Webdetails