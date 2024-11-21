import React from 'react'
import galaxyPic from '../../../assets/galaxypic.jpg'


const About = ({heading}) => {
  return (
  <>
  <h1 className='heading'> {heading}</h1>
   <section className="about">
    <img src={galaxyPic} alt="" />
    <div className="content">
      <h2>lorem ipsum dolor</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, veniam! Nulla esse exercitationem non temporibus commodi repellendus quis, saepe ab!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, veniam! Nulla esse exercitationem non temporibus commodi repellendus quis, saepe ab!
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est provident pariatur cum molestias iusto architecto. Impedit exercitationem quia hic ipsam ex minima perferendis mollitia esse fuga, cupiditate eos voluptas consectetur temporibus explicabo voluptatibus tenetur distinctio, quisquam voluptates consequuntur dignissimos at, consequatur nesciunt. Accusantium excepturi ipsa, atque distinctio consectetur.</p>
    </div>
   </section>
  </>
  )
}

export default About
