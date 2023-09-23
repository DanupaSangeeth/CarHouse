
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import car1 from '../../images/ferr.jpg';
import car2 from '../../images/benz.jpg';
import car3 from '../../images/Bugatti.jpg';
import car4 from '../../images/Audi.jpg';
import car5 from '../../images/Lamborgihini.jpg';
import car6 from '../../images/mac.jpg';
import car7 from '../../images/tesla.jpg';
import car8 from '../../images/Supra.png';
import car9 from '../../images/Sup.jpg';
import car10 from '../../images/Honda.jpg';
import car11 from '../../images/As.jpeg';
import car12 from '../../images/Ford.jpg';



const Home = () => {
 
  return (
    
        <section>
        <div className="row row-cols-1 row-cols-md-4 g-3">
           <div className="col">
              <div className="card">
                    <img src={car1} className="card-img-top" alt="Ferrari" />
                <div className="card-body">
                    <h5 className="card-title">Ferrari</h5>
                    <p className="short-description">
                        Starting MSRP <b>$321,350<sup tabindex="0" data-disclaimer="msrp_starting" role="button" aria-label="disclaimer *" className="is-loaded">*</sup></b>
                      <br/>Up to <b>48/114</b> MPG*/ MPGe*</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                    <img src={car2} className="card-img-top" alt="Mercedes-Benz" />
                <div className="card-body">
                    <h5 className="card-title">Mercedes-Benz</h5>
                    <p className="short-description">
                        Starting MSRP <b>$227,450<sup tabindex="0" data-disclaimer="msrp_starting" role="button" aria-label="disclaimer *" className="is-loaded">*</sup></b>
                     <br />Up to <b>55/56</b> Est. MPG*</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                    <img src={car3} className="card-img-top" alt="Bugatti" />
                <div className="card-body">
                    <h5 className="card-title">Bugatti</h5>
                    <p className="short-description">
                       Starting MSRP <b>$1,135,950<sup tabindex="0" data-disclaimer="msrp_starting" role="button" aria-label="disclaimer *" className="is-loaded">*</sup></b>
                      <br />Up to <b>21/28</b> Est. MPG*</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                    <img src={car4} className="card-img-top" alt="Audi" />
                <div className="card-body">
                    <h5 className="card-title">Audi</h5>
                    <p className="short-description">
                        Starting MSRP <b>$221,900<sup tabindex="0" data-disclaimer="msrp_starting" role="button" aria-label="disclaimer *" className="is-loaded">*</sup></b>
                        <br />Up to <b>32/41</b> Est. MPG*</p>
                 </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                    <img src={car5} className="card-img-top" alt="Lamborghini" />
                <div className="card-body">
                    <h5 className="card-title">Lamborghini</h5>
                    <p className="short-description">
                        Starting MSRP <b>$523,300<sup tabindex="0" data-disclaimer="msrp_starting" role="button" aria-label="disclaimer *" className="is-loaded">*</sup></b>
                      <br />Up to <b>53/46</b> Est. MPG*</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                    <img src={car6} className="card-img-top" alt="macleran" />
                <div className="card-body">
                    <h5 className="card-title">Macleran</h5>
                    <p className="short-description">
                         Starting MSRP <b>$423,350<sup tabindex="0" data-disclaimer="msrp_starting" role="button" aria-label="disclaimer *" className="is-loaded">*</sup></b>
                        <br />Up to <b>32/41</b> Est. MPG*</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                    <img src={car7} className="card-img-top" alt="Tesla" />
                <div className="card-body">
                    <h5 className="card-title">Tesla Roadster</h5>
                    <p className="short-description">
                Starting MSRP <b>$328,855<sup tabindex="0" data-disclaimer="msrp_starting" role="button" aria-label="disclaimer *" className="is-loaded">*</sup></b>
               <br />Up to <b>51/53</b> Est. MPG*</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                    <img src={car8} className="card-img-top" alt="Nissan" />
                <div className="card-body">
                    <h5 className="card-title">Nissan</h5>
                    <p className="short-description">
                    Starting MSRP <b>$449,500<sup tabindex="0" data-disclaimer="msrp_starting" role="button" aria-label="disclaimer *" className="is-loaded">*</sup></b>
                       <br />Up to <b>76/71</b> Est. MPGe</p>
                </div>
              </div>
            </div>
           
           <div className="col">
              <div className="card">
                    <img src={car9} className="card-img-top" alt="Supra" />
                <div className="card-body">
                    <h5 className="card-title">Toyota Supra</h5>
                    <p className="short-description">
                    Starting MSRP <b>$89,950<sup tabindex="0" data-disclaimer="msrp_starting" role="button" aria-label="disclaimer *" className="is-loaded">*</sup></b>
                       <br />Up to <b>42/41</b> Est. MPG*</p>
                </div>
              </div>
            </div>
           <div className="col">
              <div className="card">
                    <img src={car10} className="card-img-top" alt="Honda" />
                <div className="card-body">
                    <h5 className="card-title">Honda</h5>
                    <p className="short-description">
                       Starting MSRP <b>$228,450<sup tabindex="0" data-disclaimer="msrp_starting" role="button" aria-label="disclaimer *" className="is-loaded">*</sup></b>
                      <br />Up to <b>20/27</b> Est. MPG*</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                    <img src={car11} className="card-img-top" alt="Astorn" />
                <div className="card-body">
                    <h5 className="card-title">Astorn Martin</h5>
                    <p className="short-description">
                       Starting MSRP <b>$655,540<sup tabindex="0" data-disclaimer="msrp_starting" role="button" aria-label="disclaimer *" className="is-loaded">*</sup></b>
                      <br />Up to <b>25/32</b> Est. MPG*</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                    <img src={car12} className="card-img-top" alt="Ford" />
                <div className="card-body">
                    <h5 className="card-title">Ford</h5>
                    <p className="short-description">
                       Starting MSRP <b>$836,885<sup tabindex="0" data-disclaimer="msrp_starting" role="button" aria-label="disclaimer *" className="is-loaded">*</sup></b>
                      <br />Up to <b>$36/36</b> Est. MPG*</p>
                </div>
              </div>
            </div>
        </div>
      </section>
    
    
  );
}

export default Home;