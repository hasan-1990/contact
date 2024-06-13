const Contact = () => {
  return (
    <>
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-3">
                <img src="https://placehold.co/150x150/orange/white" alt="" />
              </div>
              <div className="col-7">
                <ul class="list-group">
                  <li className="list-group-item">
                    نام و نام خوانوادگی:
                    <span className="fw-bold">{Contact.name}</span>
                  </li>
                  <li className="list-group-item">
                    شماره تماس:<span className="fw-bold"></span>
                  </li>
                  <li className="list-group-item">
                    ادرس ایمیل:
                    <span className="fw-bold">hasanmansouri1990@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div className="col-1">
                <button className="btn btn-warning my-1  ">
                  <i className="fa fa-eye"></i>{" "}
                </button>
                <button className="btn btn-info my-1  ">
                  <i className="fa fa-edit"></i>{" "}
                </button>
                <button className="btn btn-danger my-1  ">
                  <i className="fa fa-trash"></i>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
