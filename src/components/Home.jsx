import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              Synergy is well known for their customer service, and they
              highlight that in their profile. Their About Us page tells a story
              of service and growth, all centered around their customers. For
              more insight, they have linked pages dedicated to detailing out
              more on topics like "What we live by" and "How we work."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
