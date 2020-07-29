import React from 'react';

export default function DayToggle(props) {
  const decrease = e => {
    e.preventDefault();
    props.onChange(-1);
  }
  const increase = e => {
    e.preventDefault();
    props.onChange(1);
  }

  return (<div><a href="" onClick={decrease}>&lt;</a> Week {props.week} <a href="" onClick={increase}>&gt;</a></div>)
}