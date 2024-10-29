import React, {useEffect} from 'react';
import './PricingSection.css'; 

const PricingSection = () => {
  useEffect(() => {
      document.getElementById('one-button').style.background = 'white';
      document.getElementById('one-button').style.color = 'black';
      document.getElementById('three-button').style.background = 'white';
      document.getElementById('three-button').style.color = 'black';
      document.getElementById('two').style.background = '#043873';
      document.getElementById('two').style.color = 'white';
  },[])
  function getStarted (event,value) {
    event.preventDefault();
    if(value === 'one'){
      document.getElementById('two').style.background = 'white';
      document.getElementById('two').style.color = 'black';
      document.getElementById('two-button').style.background = 'white';
      document.getElementById('two-button').style.color = 'black';
      document.getElementById('three').style.background = 'white';
      document.getElementById('three').style.color = 'black';
      document.getElementById('three-button').style.background = 'white';
      document.getElementById('three-button').style.color = 'black';
    } else if(value === 'two'){
      document.getElementById('one').style.background = 'white';
      document.getElementById('one').style.color = 'black';
      document.getElementById('one-button').style.background = 'white';
      document.getElementById('one-button').style.color = 'black';
      document.getElementById('three').style.background = 'white';
      document.getElementById('three').style.color = 'black';
      document.getElementById('three-button').style.background = 'white';
      document.getElementById('three-button').style.color = 'black';
    } else {
      document.getElementById('two').style.background = 'white';
      document.getElementById('two').style.color = 'black';
      document.getElementById('two-button').style.background = 'white';
      document.getElementById('two-button').style.color = 'black';
      document.getElementById('one').style.background = 'white';
      document.getElementById('one').style.color = 'black';
      document.getElementById('one-button').style.background = 'white';
      document.getElementById('one-button').style.color = 'black';
    }
    document.getElementById(value).style.background = '#043873';
    document.getElementById(value).style.color = 'white';
    document.getElementById(`${value}-button`).style.background = '#4F9CF9';
    document.getElementById(`${value}-button`).style.color = 'white';
  };
  return (
    <section className="pricing-section">
      <div className="container pt-5">
        <h2 className="text-center mt-5 choose-plan">Choose Your Plan</h2>
        <p className="text-center">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
        </p>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card card-align" id='one'>
              <div className="card-header">
                <h3>Free</h3>
                <p>$0</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>Capture ideas and find them quickly</li>
                  <li>Sync unlimited devices</li>
                  <li>10 GB monthly uploads</li>
                  <li>200 MB max. note size</li>
                  <li>Customize Home dashboard and access extra widgets</li>
                  <li>Connect primary Google Calendar account</li>
                  <li>Add due dates, reminders, and notifications to your tasks</li>
                </ul>
                <button onClick={(e) => getStarted(e,'one')} id='one-button' className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-align" id='two'>
              <div className="card-header">
                <h3>Personal</h3>
                <p>$11.99</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>Keep home and family on track</li>
                  <li>Sync unlimited devices</li>
                  <li>10 GB monthly uploads</li>
                  <li>200 MB max. note size</li>
                  <li>Customize Home dashboard and access extra widgets</li>
                  <li>Connect primary Google Calendar account</li>
                  <li>Add due dates, reminders, and notifications to your tasks</li>
                </ul>
                <button onClick={(e) => getStarted(e,'two')} id='two-button' className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-align" id='three'>
              <div className="card-header">
                <h3>Organization</h3>
                <p>$49.99</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>Capture ideas and find them quickly</li>
                  <li>Sync unlimited devices</li>
                  <li>10 GB monthly uploads</li>
                  <li>200 MB max. note size</li>
                  <li>Customize Home dashboard and access extra widgets</li>
                  <li>Connect primary Google Calendar account</li>
                  <li>Add due dates, reminders, and notifications to your tasks</li>
                </ul>
                <button onClick={(e) => getStarted(e,'three')} id='three-button' className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;