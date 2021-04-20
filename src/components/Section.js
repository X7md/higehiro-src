import './../App.css';
function Section(props) {
return (<section>
        <div className="row">
          <div className="col title">
            <h1>{props.title || "عنوان"}</h1>
            <p>{props.para}</p>
          </div>
          <div className="col-lg-6 col">
            <div className="image-title">
              <img src={props.image} className={"img-fluid " + props.classImage} alt="..."/>
            </div>
          </div>
          <div className="w-100">
            <hr/>
          </div>
        </div>
</section>)
}

export default Section;