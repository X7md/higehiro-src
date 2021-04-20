import './../App.css';
import './../style/Trailer.css';
function Trailer() {
  return (
    <section className="text-center">
    <h1 className="title trailer">العرض الدعائي التشويقي (Trailer)</h1>
      <div className="w-custom">
          <div className="embed-responsive embed-responsive-1by1">
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/8zZiwvF8IeY?rel=0" title="YouTube video" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      <hr/>
    <div className="p-4"/>
    </section>
  );
}

export default Trailer;