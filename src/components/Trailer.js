import './../App.css';
import './../style/Trailer.css';
import {useState} from 'react';
function Trailer(props) {
  const [show, setShow] = useState('none');
  const [url, setUrl] = useState(props.videoSource);
  return (
    <section className="text-center">
    <h1 className="title trailer">العرض الدعائي التشويقي (Trailer)</h1>
      <div className="w-custom">
          <div className="embed-responsive embed-responsive-1by1">
            <div className="ratio ratio-16x9">
              <div className="align-content-center d-flex flex-column justify-content-center" style={{display: show !== "none" ? "none":"block"}}>
                <p className="fs-2">
                  يتضمن الفيديو محتوى قد لا يناسب البعض +13
                </p>
                <div>
                <button className="btn btn-danger m-2" onClick={()=> {setUrl(url.normal); setShow("initial")}}>الإعلان الأصلي</button>
                <button className="btn btn-dark m-2" onClick={()=> {setUrl(url.blur); setShow("initial");}}>الإعلان مترجم</button>
                </div>
              </div>
              <iframe style={{display: show}} src={"https://www.youtube.com/embed/" + url + "?rel=0"} title="YouTube video" allowFullScreen></iframe>
              </div>
        </div>
      </div>
      <hr/>
    <div className="p-4"/>
    </section>
  );
}

export default Trailer;