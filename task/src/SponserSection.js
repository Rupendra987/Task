import React from 'react';
import './SponserSectiion.css'; // Import the CSS file

const SponserSection = () => {
  return (
    <section className="mt-5">
      <div className="container">
        <div className="row align-items-center sponser-section p-4">
          <div className="col-md-12">
            <h2>Your work, everywhere you are</h2>
            <p>
              Access your notes from your computer, phone or tablet by synchronising with various services, including Whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
            </p>
            <a href="#" className="btn btn-primary">Try Taskey →</a>
          </div>
      </div>
      <div className="sponsors row mt-5">
        <img className='col-md-3' src="https://w7.pngwing.com/pngs/664/673/png-transparent-apple-logo-iphone-computer-apple-logo-company-heart-logo-thumbnail.png" alt="Apple" />
        <img className='col-md-3' src="https://download.logo.wine/logo/Microsoft/Microsoft-Logo.wine.png" alt="Microsoft" />
        <img className='col-md-3' src="https://1000logos.net/wp-content/uploads/2021/06/Slack-logo.png" alt="Slack" />
        <img className='col-md-3' src="https://w7.pngwing.com/pngs/282/310/png-transparent-google-logo-google-search-google-s-google-text-logo-google-logo-thumbnail.png" alt="Google" />
      </div>
      </div>
    </section>
  );
};

export default SponserSection;