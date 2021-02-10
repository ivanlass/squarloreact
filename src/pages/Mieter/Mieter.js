import React, {useState} from 'react'
import './select2.css'
import First from './First'
import Second from './Second'


function Mieter() {
    const [pageNum, setPageNum] = useState(1)


    const changePage = (e) => {
        setPageNum(e.currentTarget.dataset.step)
    }

    const prevPage = () => setPageNum(pageNum - 1)
    const nextPage = () => setPageNum(pageNum + 1)


    return (
    <div className="">
        
        <div>
            <div className="container space-1">
                <form className="js-step-form-1">
                    <div className="row">
                        <div id="stickyBlockStartPoint" className="col-lg-4">
                            <div
                            className="js-sticky-block"

                            >
                            <ul
                            className="js-step-progress step step-icon-xs step-border-last-0 mt-5"
                            >
                            <li className={pageNum == 1? "step-item active": "step-item"} onClick={changePage} data-step={1}>
                                <a
                                className="step-content-wrapper"
                                >
                                <span className="step-icon step-icon-soft-dark">1</span>
                                <div className="step-content">
                                    <span className="step-title">Basics</span>
                                    <span className="step-title-description step-text font-size-1">General info about you</span>
                                </div>
                            </a>
                        </li>
                        
                        <li className={pageNum == 2 ? "step-item active": "step-item"} onClick={changePage} data-step={2}>
                            <a className="step-content-wrapper">
                            <span className="step-icon step-icon-soft-dark">2</span>
                            <div className="step-content">
                                <span className="step-title">Education</span>
                                <span className="step-title-description step-text font-size-1">Add education info</span>
                            </div>
                        </a>
                    </li>
                    
                    <li className={pageNum == 3 ? "step-item active": "step-item"} onClick={changePage} data-step={3}>
                        <a className="step-content-wrapper">
                        <span className="step-icon step-icon-soft-dark">3</span>
                        <div className="step-content">
                            <span className="step-title">Work experience</span>
                            <span className="step-title-description step-text font-size-1">Add work experience</span>
                        </div>
                    </a>
                </li>
                
                <li className={pageNum == 4 ? "step-item active": "step-item"} onClick={changePage} data-step={4}>
                    <a className="step-content-wrapper">
                    <span className="step-icon step-icon-soft-dark">4</span>
                    <div className="step-content">
                        <span className="step-title">Skills</span>
                        <span className="step-title-description step-text font-size-1">Add skills</span>
                    </div>
                </a>
            </li>
            
            <li className={pageNum == 5 ? "step-item active": "step-item"} onClick={changePage} data-step={5}>
                <a
                className="step-content-wrapper">
                <span className="step-icon step-icon-soft-dark">5</span>
                <div className="step-content">
                    <span className="step-title">Job type</span>
                    <span className="step-title-description step-text font-size-1">The type of job you are looking for</span>
                </div>
            </a>
        </li>
    </ul>
</div>
</div>





{pageNum == 1 && <First nextPage={nextPage}/>}
{pageNum == 2 && <Second prevPage={prevPage} nextPage={nextPage}/>}





</div>

{/* End Row*/}
</form>
{/* End Step Form*/}
</div>

{/* End Step Section*/}
</div>

</div>
);
}

export default Mieter;
