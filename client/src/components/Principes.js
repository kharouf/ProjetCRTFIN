import React from 'react'


import "../scss/principes.css"

import humantie from "../assets/images/مبادئ/humanity.svg"
import impartiality from "../assets/images/مبادئ/impartiality.svg"
import independence from "../assets/images/مبادئ/independence.svg"
import neutrality from "../assets/images/مبادئ/neutrality.svg"
import unity from "../assets/images/مبادئ/unity.svg"
import universality from "../assets/images/مبادئ/universality.svg"
import voluntary from "../assets/images/مبادئ/voluntary-service.svg"


const Principes = () => {
  return (
    <section id='principes' className='principes' >
        {/* <h1>المبادئ الأساسية للهلال الأحمر</h1> */}
<div className="container-p">
  

    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">الإنسانية</p>
            <img src={humantie}  />
            
        </div>
        <div className="flip-card-back">
            <h1 className="title">الإنسانية</h1 >
            
            <p>إنّ الحركة الدولية للصليب الأحمر والهلال الأحمر، التي انبثقت من الرغبة في إغاثة الجرحى في ميدان القتال من دون تمييز تسعى، بصفتها حركة ذات طابع دولي ووطني، إلى تجنّب المعاناة الإنسانية وتخفيفها أينما وجدت. وهدف الحركة هو حماية الحياة والصحة وضمان احترام كرامة الإنسان. وهي تعزز التفاهم المتبادل والصداقة والتعاون والسلام الدائم بين جميع الشعوب </p>
        </div>
    </div>
    </div>
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">الحياد</p>
            <img src={impartiality}  />
            
        </div>
        <div className="flip-card-back">
            <h1 className="title">الحياد</h1>
            <p>لا تمارس الحركة أي تمييز على أساس الجنسية أو العرق أو المعتقدات الدينية أو الطبقية أو الآراء السياسية. وتسعى إلى تخفيف معاناة الأفراد   وفقاً لإحتياجاتهم فقط، وإعطاء الأولوية لأكثر الحاجات الأكثر الحاحاً</p>
        </div>
    </div>
    </div>
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">عدم التحيّز</p>
            <img src={neutrality}  />
            
        </div>
        <div className="flip-card-back">
            <h1 className="title">عدم التحيّز</h1>
            <p>من أجل الاستمرار في التمتع بثقة الجميع، لا يجوز للحركة أن تنحاز إلى أي طرف في الأعمال العدائية أو أن تدخل في أي وقت في خلافات ذات طبيعة سياسية، أو عرقية أو دينية أو أيديولوجية</p>
        </div>
    </div>
    </div>
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">الإستقلالية</p>
            <img src={independence}  />
            
        </div>
        <div className="flip-card-back">
            <h1 className="title">الإستقلالية</h1>
            <p>إنّ الحركة مستقلة. والجمعيات الوطنية، التي تعمل كجهات مساعدة في الخدمات الإنسانية  التي تقدّمها حكوماتها وتخضع لقوانين بلدانها، إلاّ أنّ عليها أن تحافظ دائمًا على استقلالها الذاتي حتى تتمكّن في جميع الأوقات من العمل وفقًا للمبادئ للحركة.</p>
        </div>
    </div>
    
    </div>
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title1">الخدمة التطوعية
</p>
            <img src={voluntary}  />
            
        </div>
        <div className="flip-card-back">
            <h1 className="title">الخدمة التطوعية</h1>
        <p>الحركة منظمة إغاثة تطوعية لا تبغي الربح بأي شكل من الأشكال</p>
        <p>يجسّد مبدأ الخدمة التطوعية الدافع المشترك الذي يوحّد جميع العاملين داخل الحركة: الرغبة في مساعدة الآخرين. إنّه مصدر إلهام وإعلان عن التضامن في الوقت نفسه.</p>

        </div>
    </div>
    </div>
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">الوحدة</p>
            <img src={unity}  />
            
        </div>
        <div className="flip-card-back">
            <h1 className="title">الوحدة</h1>
            <p>لا يمكن ان تكون هناك سوى جمعية واحدة للصليب الأحمر أو الهلال الأحمر في كل بلد. يجب أن تكون خدماتها متاحة للجميع، وأن يمتد عملها الإنساني الى جميع أراضي البلد</p>
        </div>
    </div>
    </div>
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">العالمية</p>
            <img src={universality}  />
            
        </div>
        <div className="flip-card-back">
            <h1 className="title">العالمية</h1>
            <p>الحركة الدولية للصليب الأحمر والهلال الأحمر هي حركة عالمية، تتمتع فيها كل الجمعيات الوطنية بوضع متساوو ووتقاسم مسؤوليات وواجبات متساوية في مساعدة بعضها العبض</p>
        </div>
    </div>
    </div>
    
    </div>
    </section>
  )
}

export default Principes