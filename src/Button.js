import React from 'react'

export default function Button({ color, ...props }) {
  return (
    <button name="button" style={{ backgroundColor: color }} { ...props } />
  )
}
