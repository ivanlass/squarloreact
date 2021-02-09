import React from 'react'
import '../../pages/Home/Home.css'


function BigInput() {
    return (

<>
        <div className="card p-2 mb-3">
            <div className="form-row">
            <div className="col-sm mb-2 mb-sm-0">
                <div className="input-group input-group-merge input-group-borderless">
                    <div className="input-group-prepend"><div className="input-group-text">
                    <svg width="11"  viewBox="0 0 79 82" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="29" stroke="#808080" strokeWidth="6"/>
<path d="M53 56L73 76" stroke="#808080" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                    </div>
                    <input type="text" name="buyAddress" placeholder="Enter location" aria-label="Enter location" className="input-big form-control" />
                </div>
            </div>
            <div className="col-sm-auto">
                <button type="button" className="btn btn-block btn-primary px-5">Search</button>
            </div>
        </div> 
    </div>        
    <p className="label-bit-input">Search through over 125,000 listings</p>
 </>
    );
}

export default BigInput;
