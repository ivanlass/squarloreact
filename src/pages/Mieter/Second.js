

function Second(props) {
    return (
      <>
       <div id="formContainer" className="col-lg-8 form-page">
      {/* Content Step Form*/}
      <div id="uploadResumeStepFormContent">
          {/* Card*/}
          <div id="uploadResumeStepBasics" className="">
              {/* Header*/}
              <div className="card-header bg-img-hero py-4">
                  <div className="flex-grow-1">
                      <span className="d-lg-none">Step 2 of 5</span>
                      <h3 className="card-header-title">Education</h3>
                  </div>
              </div>
              {/* End Header*/}
              
              {/* Body*/}
              <div className="card-body">
                  {/* Form Group*/}
                  <div className="form-group">
                      <label for="firstNameLabel" className="input-label"
                      >First name</label
                      >
                      
                      <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      id="firstNameLabel"
                      placeholder="Maria"
                      aria-label="Maria"
                      />
                  </div>
                  {/* End Form Group*/}
                  
                  <div className="btns-group">
                    <button type="button" className="btn btn-light" onClick={props.prevPage}>  &#60; Previous step</button>
                    <button onClick={props.nextPage} type="button" className="btn btn-primary px-5">Next step Next step &#8594;</button>
                  </div>
              </div>
          </div>

  </div>
  
  </div>
      </>
    );
  }
  
  export default Second;
  
  
  