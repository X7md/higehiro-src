import './../App.css';
import Nav from './Nav';
import SectionCard from './Section';
import Trailer from './Trailer';
import image1 from '../media/Hige wo Soru 1.png';
import image2 from '../media/Hige wo Soru 3.png';
function App() {
  return (
    <div className="App">
     <Nav/>
     <div className="p-3" />
     <div className="container">
      <header className="App-header">
        
        <SectionCard
        title="هيغي هيرو: بعد ما أن رُفضت، حلقت وآويت فتاة ثانوية هاربة" 
        image={image1}
        classImage = "title-image"
        para="يحكي الأنمي قصة رجل يدعى يوشيدا-كن، حيث كان عائدًا من الحانة ثملًا حزينًا وغاضبًا بعد أن رفضته سيدة جميلة -كانت معه في العمل- بموعد غرامي، وفي طريق عودته قابل فتاةٍ يافعة  جالسةً لوحدها عند عامود الانارة، وألحـت عليه أن تبيت عنده تلك الليلة" />
      </header>
     <Trailer videoSource={{blur: "U4G2HgJcR-8", normal: "8zZiwvF8IeY"}} />
    </div>
    <div>
    <div className="container">
    <SectionCard
        title="سايو، فتاة المرحلة الثانوية " 
        image={image2}
        classImage = "second-image"
        para="هربت سايو من منزلها، وأصبحت فتاة ليل، كي تؤمن لنفسها مَسكنًا تبيت فيه، وتلك كانت طريقتها في العيش وحين عرف يوشيدا-كن بهذا الأمر وبخها على أفعالها تلك، فأمن لها مسكنًا، بشرط أن تقوم هي بالأعمال المنزلية كترتيب الشقة، وطبخ الطعام فأصبحت تعيش بالشقة معه" />
    </div>
    </div>
    <div className="p-3" />
  </div>
  );
}

export default App;
