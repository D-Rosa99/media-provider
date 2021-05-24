import React, { Fragment } from "react";
import style from './GroupButton.module.css';

const {buttonGroup} = style;

const GroupButton = ({dataList, handle}) => {
  return (
    <div className={buttonGroup}>
      {dataList.map((label, index) => (<Fragment key={`${label}_${index}`}><button className="button" name={label} onClick={handle}>{label}</button></Fragment>))}
    </div>
  );
};

export default GroupButton;
