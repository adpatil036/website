import React, { useEffect, useState } from "react";

function Contact() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/rest")
      .then((res) => res.text())
      .then((data) => {
        setData(JSON.parse(data));
        console.log(data);
      });
    // console.log(">>> ", http://localhost:3000/src/php/index.php)
  }, []);

  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          {/* <div className="col-lg-7"> */}
          <img
            className="img-fluid rounded mb-4 mb-lg-0 contactImg"
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
          {/* </div> */}
          {/* <div className="col-lg-5"> */}
          <div>
            <h1 className="font-weight-light p-2">Contact</h1>
            <p>
              {/* {data} */}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            {data && Object.values(data).length > 0 && (
              <table>
                <tr>
                  <th>Contact Person</th>
                  <th>Mobile</th>
                  <th>Email Id</th>
                </tr>
                {Object.values(data).map((item) => {
                  return (
                    <tr>
                      <td>{`${item[0]} ${item[1]}`}</td>
                      <td>{item[2]}</td>
                      <td>{item[3]}</td>
                    </tr>
                  );
                })}
              </table>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
export default Contact;
