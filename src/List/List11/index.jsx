import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title';
import './index.scss'


const List11 =({title,color,background,list,line,round,bottom})=> {
  return (
    <div className="sc-list11" style={{background:`${background}`,color:`${color}`}}>
      <Title title={title} line={line} />

      {list.map((item,i) =>
          <div className="m-item" key={i}>
            <div className="m-hd">
              <span>{item?.title}</span>
              <label className={round? "round":""}>{item?.label}</label>
            </div>
            <div><div></div><spans className={bottom? "bottom":""}>{item?.cnt}</spans></div>
          </div>
      )}
    </div>
  )
}

List11.propTypes = {
  background:PropTypes.string,
  color:PropTypes.string,
  title:PropTypes.string,
  list:PropTypes.array,
  line:PropTypes.bool,
  round:PropTypes.bool,
  bottom:PropTypes.bool,
};
List11.defaultProps = {
  background:'#fff',
  color:'#333',
  title:'标题',
  list:[],
  line:true,
  round:true,
  bottom:true,
}

export default List11