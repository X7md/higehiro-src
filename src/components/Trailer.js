import './../App.css';
import './../style/Trailer.css';
import {useState} from 'react';
function Trailer() {
  const [show, setShow] = useState('none');
  return (
    <section className="text-center">
    <h1 className="title trailer">العرض الدعائي التشويقي (Trailer)</h1>
      <div className="w-custom">
          <div className="embed-responsive embed-responsive-1by1">
            <div className="ratio ratio-16x9">
              <div className="align-content-center d-flex flex-column justify-content-center" style={{display: show !== "none" ? "none":"block"}}>
                <p className="fs-3">
                  يتضمن الفيديو محتوى قد لا يناسب البعض +13
                </p>
                <div>
                <button className="btn btn-dark" onClick={()=> setShow("initial")}>أعرض المحتوى</button>
                </div>
              </div>
              <iframe style={{display: show}} src="https://www.youtube.com/embed/8zZiwvF8IeY?rel=0" title="YouTube video" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      <hr/>
    <div className="p-4"/>
    </section>
  );
}

export default Trailer;