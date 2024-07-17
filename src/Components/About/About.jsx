import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
    <img src={about_img} alt=""  className='about-img'/>
        </div>
        <div className="about-right">
<h3>About University</h3>
<h2>Generating Leaders for tomorrow</h2>
<p>The IBA launched a 2-year Bachelor of Business Administration (BBA) program in 1968 under the patronage of University of Karachi and later on a 4-year BBA in 2002. To meet the international standards, IBA changed the curricula of its bachelor programs after acquiring status of the degree awarding institute. The BS Computer Science program was introduced in 1999. In 2002, the IBA undergraduate programs were upgraded to 4-year degree programs. Considering the growing demand of certain courses in the market, the IBA introduced a series of BS programs, including BS Economics and Mathematics, BS Social Sciences and Liberal Arts and BS Accounting and Finance in 2012 and 2013. The IBA has also introduced the BS Economics program in 2018.</p>
 <p>The Institute of Business Administration (IBA), Karachi comprises of three schools, namely the School of Business Studies (SBS), the School of Economics and Social Sciences (SESS), and the School of Mathematics and Computer Science (SMCS).</p>       
 <button className='btn dark-btn'>Read More</button>      
        </div>
    </div>
  )
}

export default About