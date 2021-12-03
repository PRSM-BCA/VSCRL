import React from "react";
import RankingExperimentLayout from "./RankingExperimentLayout.jsx";
import RankingExp from "./RankingExp.jsx";

function RankingAnswer() {
  return (
    // <RankingExperimentLayout>
      <RankingExp />
    // </RankingExperimentLayout>
  );
}

export default RankingAnswer;

// -------------------------INITIAL DRAGGABLE VERSION
// import "./Question.scss";
// import Draggable from "react-draggable";
// import tools2 from "./images/tools2.jpeg";
// import { useState } from "react";

// function RankingAnswer(props) {
//   // initialize the position state to store our position
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   // track position function will update our position whenever onDrag is triggered.
//   const trackPos = (data) => {
//     setPosition({ x: data.x, y: data.y });
//   };

//   return (
//     <>
//       <section className="RankingAnswer">
//         {/* <img className="medicalTools_2" src={tools2} alt="Medical tools" /> */}
//         <h2>Rank the 8 pains about your footwear</h2>
//         <div className="dragAndDrop">
//           <div className="dragAndDropGroup">
//             <Draggable axis="y" onDrag={(event, data) => trackPos(data)}>
//               <div className="dragAndDropItem">
//                 <div>
//                   <p>Sweaty Feet</p>
//                   <div>
//                     x: {position.x.toFixed(0)}, y:{position.y.toFixed(0)}
//                   </div>
//                 </div>
//               </div>
//             </Draggable>
//             <Draggable axis="y">
//               <div className="dragAndDropItem">
//                 <div>
//                   <p>Tired feet</p>
//                 </div>
//               </div>
//             </Draggable>
//             <Draggable axis="y">
//               <div className="dragAndDropItem">
//                 <div>
//                   <p>Body fluids on footwear</p>
//                 </div>
//               </div>
//             </Draggable>
//             <Draggable axis="y">
//               <div className="dragAndDropItem">
//                 <div>
//                   <p>Lack of style</p>
//                 </div>
//               </div>
//             </Draggable>
//             <Draggable axis="y">
//               <div className="dragAndDropItem">
//                 <div>
//                   <p>Lack of support</p>
//                 </div>
//               </div>
//             </Draggable>
//             <Draggable axis="y">
//               <div className="dragAndDropItem">
//                 <div>
//                   <p>Smelly shoes</p>
//                 </div>
//               </div>
//             </Draggable>
//             <Draggable axis="y">
//               <div className="dragAndDropItem">
//                 <div>
//                   <p>Hot feet</p>
//                 </div>
//               </div>
//             </Draggable>
//             <Draggable axis="y">
//               <div className="dragAndDropItem">
//                 <div>
//                   <p>Lack of cushion</p>
//                 </div>
//               </div>
//             </Draggable>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default RankingAnswer;
