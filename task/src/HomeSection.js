import React from 'react';
import './HomeSection.css';

const HomeSection = () => {
    const imgSource = "https://s3-alpha-sig.figma.com/img/a759/0a77/ce871a2c484fa8e005ed5bb334fc8607?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMusE3JGTqQgUTfttopVxciMKoOTJofmpDqmQhhsgCRCJhBDuaYXUYs1LTHwMTfPtxIvPoVQ7A43ghRm-nTDBFUvF0pzoaaYNjHu8OiI8lBxdIysq0oSsr6Qj6SzDpRRDaLI~VcmxYEUGZtBk8vbxpozL~FePzbhxKxqS6NnC~Rrj~h4io6yEZ6Y1JGtrLmZg~xylf4FN~9H1fzX5Ci7zisNYKBABYTW30Qb1iGdHCMEzmwkH1XuMSZntpl33eQAJAXjrbJZpYwysY0gLWMTye0baR-nJJ6gHnDeivFRh53lbTXRz0-jVB~88mDCrtG28-02kEeUveOGSpyOFWr-Vg__"
  return (
    <section className="home-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 alignment">
            <h1>Get More Done with Whitepace</h1>
            <p>
              Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
            </p>
            <a href="#" className="btn btn-primary">
              Try Whitepace Free
            </a>
          </div>
          <div className="col-md-6">
            <img src={imgSource} alt="Project management illustration" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;