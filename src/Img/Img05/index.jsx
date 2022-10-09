import React from 'react';
import PropTypes from 'prop-types';//prop代表父组件传递过来的值，types代表类型。简单来说就是用来校验父组件传递过来值的类型
import Title from 'Title';
import './index.scss'


const Img05 =({background,color,title,label,cnt,img1,img2,line,bg})=> {
  return (
    <div className="sc-img05" style={{background:`${background}`,color:`${color}`}}>
      <Title title={title} line={line} />
     {img1 &&
        <div className="m-img">
          <img src={img1} />
          <div></div>
        </div>}

      {img2 &&
        <div className="m-img">
          <div></div>
          <img src={img2} />
        </div>}
        
      <div>
        {label &&
          <label className={bg? "bg":""}> {label}</label>
        }</div>
      <div className='m-cnt'>{cnt}</div>
    </div>
  )
}

Img05.propTypes = {
  background:PropTypes.string,
  color:PropTypes.string,
  title:PropTypes.string,
  label:PropTypes.string,
  cnt:PropTypes.string,
  img1:PropTypes.string,
  img2:PropTypes.string,
  line:PropTypes.bool,
  bg:PropTypes.bool,
};

Img05.defaultProps = {
  background:'#fff',
  color:'#333',
  title:'标题',
  line: true,
  bg:true,
}

export default Img05