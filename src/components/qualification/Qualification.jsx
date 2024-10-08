import React, { useState } from 'react'
import './Qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
    }


  return (
    <section className="qualification section" id='qualifications'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 ? 
                    "qualification__button qualification__active button--flex" :
                    "qualification__button button--flex"}
                    onClick={()=>toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={
                    toggleState === 2 ? 
                    "qualification__button qualification__active button--flex" :
                    "qualification__button button--flex"}
                    onClick={()=>toggleTab(2)}
                >
                     <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>

                <div className="qualification__button button--flex">
                    <i className="uil uil- qualification__icon"></i>
                </div>
            </div>

            <div className="qualification__sections">
                <div className={
                    toggleState === 1 ? 
                    "qualification__content qualification__content-active" :
                    "qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> BAC C with honors</h3>
                            <span className="qualification__subtitle">Ly-Bi-Bo</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019-2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div ></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title"> IT Engineering BSc </h3>
                            <span className="qualification__subtitle"> ENSPY </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020-2022
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> IT Engineering studies</h3>
                            <span className="qualification__subtitle"> ENSPY </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2023-present 
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>   

                    <div className="qualification__data">
                        <div ></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title"> ...</h3>
                            <span className="qualification__subtitle"></span>
                            <div className="qualification__calendar">
                              {/**  <i className="uil uil-calendar-alt"></i> */}
                            </div>
                        </div>

                    </div>                
                </div>

                <div className={
                    toggleState === 2 ? 
                    "qualification__content qualification__content-active" :
                    "qualification__content"
                }>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title"> Commercial Agent </h3>
                            <span className="qualification__subtitle">Douala Parfumery</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Summer Intern 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Prepa-Concours Professor</h3>
                            <span className="qualification__subtitle"> Icorp</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Summer Intern 2021
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title"> Prep Teacher and Math Departement head</h3>
                            <span className="qualification__subtitle"> Learning Academia </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Summer Intern 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> ... </h3>
                            <span className="qualification__subtitle"> </span>
                            <div className="qualification__calendar">
                                {/* <i className="uil uil-calendar-alt"></i> */} 
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification