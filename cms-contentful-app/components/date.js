import React from 'react';
import { format } from 'date-fns'

export default function DateComponent({ dateString }) {
  return (
    <time dateTime={dateString} data-test="mock-date" >
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  )
}
