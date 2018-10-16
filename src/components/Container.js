import React from 'react';
import Button from './Button';
import './Container.css';

const buttonPannel = (props) => {
  return (
    <div className="container">
      <Button clickHandler={props.clickHandler} extraStyle='silver'>AC</Button>
      <Button clickHandler={props.clickHandler} extraStyle='silver'>+/-</Button>
      <Button clickHandler={props.clickHandler} extraStyle='silver'>%</Button>
      <Button clickHandler={props.clickHandler} extraStyle='orange'>/</Button>
      <Button clickHandler={props.clickHandler} >7</Button>
      <Button clickHandler={props.clickHandler} >8</Button>
      <Button clickHandler={props.clickHandler} >9</Button>
      <Button clickHandler={props.clickHandler} extraStyle='orange'>X</Button>
      <Button clickHandler={props.clickHandler} >4</Button>
      <Button clickHandler={props.clickHandler} >5</Button>
      <Button clickHandler={props.clickHandler} >6</Button>
      <Button clickHandler={props.clickHandler} extraStyle='orange'>-</Button>
      <Button clickHandler={props.clickHandler} >1</Button>
      <Button clickHandler={props.clickHandler} >2</Button>
      <Button clickHandler={props.clickHandler} >3</Button>
      <Button clickHandler={props.clickHandler} extraStyle='orange'>+</Button>
      <Button clickHandler={props.clickHandler} >0</Button>
      <Button clickHandler={props.clickHandler} >0</Button>
      <Button clickHandler={props.clickHandler} >.</Button>
      <Button clickHandler={props.clickHandler} extraStyle='orange'>=</Button>
    </div>
  );
};

export default buttonPannel;
