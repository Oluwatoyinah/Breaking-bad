import React from 'react'

const Character = ({characters}) => {
  return (
    <div className="col-xl-3 col-md-5 col-lg-4 col-sm-7 col-10 mx-auto mx-lg  -0 px-3 px-sm-auto">
        <div className="character-box">
            <img src={characters.img} style={{height: "300px"}} alt="" />
            <div className="p-3">
                <h6><span className="fw-bold mb-0">Name: </span>{characters.name}</h6>
                <p><span className="fw-bold">Nickname: </span>{characters.nickname}</p>
            </div>
        </div>
    </div>
  )
}

export default Character