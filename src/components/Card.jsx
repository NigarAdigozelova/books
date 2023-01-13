import React from 'react'

const Card = ({a}) => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDsE-CE_fXoriHXGL1JWzqqu9aNH-gEKNM')
  .then((response) => response.json())
  .then((data) => console.log(data));
  return (
    <>
    <div>
        <div><img src="" alt="" /></div>
        <div>
            <h1>a.</h1>
            <p></p>
            <div>
                <p></p>
                <p></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card