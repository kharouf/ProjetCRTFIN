import React from 'react'

import "../scss/programs.css"

import Carousel from 'react-grid-carousel'
import nacher from '../assets/images/برامج/nacher.jpg'
import nacher1 from '../assets/images/برامج/nacher1.jpg'
import nacher2 from '../assets/images/برامج/nacher2.jpg'
import secourisme from '../assets/images/برامج/secourisme.jpg'
import secourisme1 from '../assets/images/برامج/secourisme1.jpg'
import secourisme2 from '../assets/images/برامج/secourisme2.jpg'
import catastroph from '../assets/images/برامج/catastroph.jpg'
import catastroph1 from '../assets/images/برامج/catastroph1.jpg'
import catastroph2 from '../assets/images/برامج/catastroph2.jpg'
import sante from '../assets/images/برامج/sante.jpg'
import sante1 from '../assets/images/برامج/sante1.jpg'
import sante2 from '../assets/images/برامج/sante2.jpg'
import ejtima3y from '../assets/images/برامج/ejtima3y.jpg'
import ejtima3y1 from '../assets/images/برامج/ejtima3y1.jpg'
import ejtima3y2 from '../assets/images/برامج/ejtima3y2.jpg'
import chabeb from '../assets/images/برامج/chabeb.jpg'
import chabeb1 from '../assets/images/برامج/chabeb1.jpg'
import chabeb2 from '../assets/images/برامج/chabeb2.jpg'


const Programs = () => {
  return (
    <section id="programs">
      <div className="container-pp">
        <div class="card">
          <div class="content">
            <div class="back">
              <div class="back-content">
                <img src={nacher} alt="" width={"300px"} height={"350px"} />
                <h1>برنامج النشر</h1>
              </div>
            </div>
            <div class="front">



              <div class="front-content">
                <Carousel dotColorActive   >
                  <Carousel.Item>
                    <img src={nacher} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={nacher1} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={nacher2} />
                  </Carousel.Item>
                </Carousel>

                <div class="description">

                  
                    <h1>التعريف بالهلال الأحمر التونسي وبالحركة الدولية
                      (نشأتها مكوناتها نشاطاتها ومبادئها)</h1>
                    <h1> نشر القانون الدولي الإنساني والعمل على إدماج المفاهيم الإنسانية للحركة </h1>
                    <h1> احترام الشارة وخلق الآليات لتحقيق كل ذلك</h1>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="back">
              <div class="back-content">
                <img src={secourisme} alt="" width={"300px"} height={"350px"} />
                <h1>برنامج الإسعافات الأولية</h1>
              </div>
            </div>
            <div class="front">



              <div class="front-content">
                <Carousel dotColorActive showDots>
                  <Carousel.Item>
                    <img src={secourisme}  />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={secourisme1} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={secourisme2} />
                  </Carousel.Item>
                </Carousel>

                <div class="description">

                  
                    <h1> العمل على تكوين جميع شرائح المجتمع في الإسعافات الأولية </h1>
                    <h1>السعي لتكوين فرق مؤهلة للتدخل على الطرقات، في الملاعب، على الشواطئ وتغطية مختلف التظاهرات</h1>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="back">
              <div class="back-content">
                <img src={catastroph} alt="" width={"300px"} height={"350px"} />
                <h1>برنامج إدارة الكوارث</h1>
              </div>
            </div>
            <div class="front">



              <div class="front-content">
                <Carousel dotColorActive showDots>
                  <Carousel.Item>
                    <img src={catastroph} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={catastroph1} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={catastroph2} />
                  </Carousel.Item>
                </Carousel>

                <div class="description">

                  
                    <h1> العمل على التأهب والاستجابة والتعافي من الكوارث </h1>
                    <h1> التخفيف من آثارها </h1>
                    <h1> تعزيز آليات المواجهة لدى المجتمعات والأسر </h1>




                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="back">
              <div class="back-content">
                <img src={sante} alt="" width={"300px"} height={"350px"} />
                <h1>برنامج الصحة</h1>
              </div>
            </div>
            <div class="front">



              <div class="front-content">
                <Carousel dotColorActive showDots>
                  <Carousel.Item>
                    <img src={sante} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={sante1} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={sante2} />
                  </Carousel.Item>
                </Carousel>

                <div class="description">

                  
                    <h1> العمل على دعم البرامج الوطنية للصحة و النهوض بقواعد حفظ الصحة </h1>
                    <h1> تكوين الشباب في الوقاية ومقاومة الأمراض المعدية والآفات </h1>
                    <h1> التشجيع على التبرع بالدم </h1>




                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="back">
              <div class="back-content">
                <img src={ejtima3y} alt="" width={"300px"} height={"350px"} />
                <h1>برنامج العمل الاجتماعي</h1>
              </div>
            </div>
            <div class="front">



              <div class="front-content">
                <Carousel dotColorActive showDots>
                  <Carousel.Item>
                    <img src={ejtima3y} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={ejtima3y1} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={ejtima3y2} />
                  </Carousel.Item>
                </Carousel>

                <div class="description">

                  
                    <h1> العمل على تقديم يد العون للفئات الهشة كلما دعت الحاجة قصد دعم مواردها وتحسين ظروف وسبل عيشها</h1>




                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="back">
              <div class="back-content">
                <img src={chabeb} alt="" width={"300px"} height={"350px"} />
                <h1>برنامج الشباب</h1>
              </div>
            </div>
            <div class="front">



              <div class="front-content">
                <Carousel dotColorActive showDots>
                  <Carousel.Item>
                    <img src={chabeb} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={chabeb1} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={chabeb2} />
                  </Carousel.Item>
                </Carousel>

                <div class="description">

                  
                     العمل على استقطاب الشباب وتنمية قدراتهم لتحسين جودة العمل الإنساني
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Programs