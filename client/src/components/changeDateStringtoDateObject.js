import React from 'react'


const dateObjectFormatter = (year, month, day) => {
  const dateObject = new Date(year, month, day, 10, 33, 30, 0)
  return dateObject
}

export default function changeDateStringtoDateObject(date) {
  return dateObjectFormatter(
    parseInt(date.slice(6,10)), 
    parseInt(date.slice(3,5)) - 1, 
    parseInt(date.slice(0,2)))
}
