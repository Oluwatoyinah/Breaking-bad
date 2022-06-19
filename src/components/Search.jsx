import React, { useState } from 'react'

const Search = ({getQuery}) => {
  const[text, setText] = useState('');

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <input type="text" className="form-control" placeholder='Search for a character' value={text} onChange={(e) => onChange(e.target.value)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search