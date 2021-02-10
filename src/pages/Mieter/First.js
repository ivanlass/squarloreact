

function First(props) {
  return (
    <>
     <div  className="col-lg-8 form-page">
    {/* Content Step Form*/}
    <div id="uploadResumeStepFormContent">
        {/* Card*/}
        <div id="uploadResumeStepBasics" className="">
            {/* Header*/}
            <div className="card-header bg-img-hero py-4">
                <div className="flex-grow-1">
                    <span className="d-lg-none">Step 1 of 5</span>
                    <h3 className="card-header-title">Basics</h3>
                </div>
            </div>
            {/* End Header*/}
            
            {/* Body*/}
            <div className="card-body">
                {/* Form Group*/}
                <div className="form-group">
                    <label for="firstNameLabel" className="input-label">First name</label>
                    
                    <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    id="firstNameLabel"
                    placeholder="Maria"
                    aria-label="Maria"
                    />
                    
                </div>
                <div className="form-group">
                    <label for="firstNameLabel" className="input-label">First name</label>
                    
                    <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    id="firstNameLabel"
                    placeholder="Maria"
                    aria-label="Maria"
                    />
                    
                </div>
                <div className="form-group">
                    <label for="firstNameLabel" className="input-label">First name</label>
                    
                    <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    id="firstNameLabel"
                    placeholder="Maria"
                    aria-label="Maria"
                    />
                    
                </div>
                
                
                <div style={{textAlign:"right"}}>
                <button onClick={props.nextPage} type="button" className="btn btn-primary px-5">Next step &#8594;</button>
                </div>
                
            </div>

            
        </div>


        
        

</div>


</div>
    </>
  );
}

export default First;


