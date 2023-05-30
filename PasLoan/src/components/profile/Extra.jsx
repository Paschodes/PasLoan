// import React from 'react'
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import style from './percentage.module.css'

// export const Percentage = () => {
//   return (
//       <div>
//          <div className={style.predictionBlock}>
//             <div className={style.prediction}>
//                <div className={style.dataBlue}>
//                   <p>New Clients</p>
//                   <div className={style.percentageBlock}>
// <KeyboardArrowUpIcon className={style.blue}/>
//                      <p>110
//                         <span className={style.percent}>%</span>
//                      </p>
//                   </div>
//                </div>
//                <div className={style.circle_circle_blue}>
//                   <p>45</p>
//                </div>
//             </div>
// <div className={style.prediction_greenColor}>
//                <div className={style.dataGreen}>
//                   <p>Active Loans</p>
//                   <div className={style.percentageBlock}>
//                      <KeyboardArrowUpIcon className={style.green}/>
//                      <p>60
//                         <span className={style.percent}>%</span>
//                      </p>
//                   </div>
//                </div>
//                <div className={style.circle_circle_green}>
// <p>50</p>
//                </div>
//             </div>

//             <div className={style.prediction_yellowColor}>
//                <div className={style.dataYellow}>
//                   <p>Extended Loans</p>
//                   <div className={style.percentageBlock}>
//                      <KeyboardArrowUpIcon className={style.yellow}/>
//                      <p>30
// <span className={style.percent}>%</span>
//                      </p>
//                   </div>
//                </div>
//                <div className={style.circle_circle_yellow}>
//                   <p>20</p>
//                </div>
//             </div>
// Lois Omodibo2:38 AM
// <div className={style.prediction_redColor}>
//                <div className={style.dataRed}>
//                   <p>Overdue Payments</p>
//                   <div className={style.percentageBlock}>
//                      <KeyboardArrowUpIcon className={style.red}/>
//                      <p>30
//                         <span className={style.percent}>%</span>
//                      </p>
//                    </div>
//                </div>
// <div className={style.circle_circle_red}>
//                   <p>18</p>
//                </div>
//             </div>

//             <div className={style.prediction_redColor}>
//                <div className={style.dataRed}>
//                   <p>Defaulted Loans</p>
//                   <div className={style.percentageBlock}>
//                      <KeyboardArrowUpIcon className={style.red}/>
//                         <p>30
//                            <span className={style.percent}>%</span>
// </p>
//                     </div>
//                   </div>
//                <div className={style.circle_circle_red}>
//                   <p>18</p>
//                </div>
//             </div>
//          </div>
//       </div>
//    )
// }
// Lois Omodibo2:39 AM
// .predictionBlock{
//     display: flex;
// }

// .prediction{
//     display: flex;
//     align-items: flex-end;
//     justify-content: space-between;
//     width: 190px;
//     padding: 10px;
//     /* border: 2px solid blue; */
//     background: #F0F4FC;
//     border-bottom: 5px solid #0D99FF;
//     margin-right: 30px;
// }
// Lois Omodibo2:43 AM
// .dataBlue p, .dataGreen p, .dataYellow p, .dataRed p{
//     color: rgba(0, 0, 0, 0.5);
//     font-weight: 400;
//     font-size: 15px;
//     line-height: 18px;
//     margin-bottom: 7px;
// }

// .percentageBlock{
//     display: flex;
//     align-items: flex-start;
// }

// .percentageBlock p{
//     font-weight: 400;
//     font-size: 24px;
//     line-height: 28px;
//     color: #000000;
// }
// .percent{
//     color:  hsl(0, 0%, 50%);
//     margin-left: 5px;
// }
// .circle_circle_blue{
//     width: 35px;
//     height: 35px;
//     border-radius: 50%;
//     border: 3px solid transparent;
//     background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
//     background-repeat: no-repeat;
//     background-position: center center, left top, right top, left bottom, right bottom;
//     background-origin: content-box, border-box, border-box, border-box, border-box;
//     background-clip: content-box, border-box, border-box, border-box, border-box;
//     transform: rotate(1deg);
// Lois Omodibo2:44 AM
// background-image: linear-gradient(white, white), 
//                       linear-gradient(30deg, #0D99FF 36%, #0D99FF 30%), 
//                       linear-gradient(120deg,#0D99FF 36%, #0D99FF 30%), 
//                       linear-gradient(300deg, #D9D9D9 36%, #D9D9D9 30%), 
//                       linear-gradient(210deg, #D9D9D9 36%, #D9D9D9 30%);
// }
// .circle_circle_blue p{
//     color: rgba(0, 0, 0, 0.8);
//     font-weight: 600;
//     font-size: 16px;
//     position: fixed;
//     left: 5px;
//     top: 5px;
// }

// .blue{
//     color: #00D43D;
// }
// /* green */

// .circle_circle_green p{
//     color: rgba(0, 0, 0, 0.8);
//     font-weight: 600;
//     font-size: 16px;
//     position: fixed;
//     left: 5px;
//     top: 5px;
// }

// .prediction_greenColor{
//     display: flex;
//     align-items: flex-end;
//     justify-content: space-between;
//     width: 190px;
//     padding: 10px;
//     /* border: 2px solid blue; */
//     background: #F0F4FC;
//     border-bottom: 5px solid #00D43D;
//     margin-right: 30px;
// }
// .greenColor{
//     border-bottom: 5px solid #00D43D;
// }

// .circle_circle_green{
//     width: 35px;
//     height: 35px;
//     border-radius: 50%;
//     border: 3px solid transparent;
//     background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
//     background-repeat: no-repeat;
//     background-position: center center, left top, right top, left bottom, right bottom;
//     background-origin: content-box, border-box, border-box, border-box, border-box;
//     background-clip: content-box, border-box, border-box
// Lois Omodibo2:46 AM
// transform: rotate(1deg);
//     background-image: linear-gradient(white, white), 
//                       linear-gradient(30deg, #00D43D 36%, #00D43D 30%), 
//                       linear-gradient(120deg,#00D43D 36%, #00D43D 30%), 
//                       linear-gradient(300deg, #D9D9D9 36%, #D9D9D9 30%), 
//                       linear-gradient(210deg, #D9D9D9 36%, #D9D9D9 30%);
// }

// .green{
//     color: #00D43D;
// }

// /* yellow */
// .circle_circle_yellow p{
//     color: rgba(0, 0, 0, 0.8);
//     font-weight: 600;
//     font-size: 16px;
//     position: fixed;
//     left: 5px;
//     top: 5px;
// }

// .prediction_yellowColor{
//     display: flex;
//     align-items: flex-end;
//     justify-content: space-between;
//     width: 190px;
//     padding: 10px;
//     /* border: 2px solid blue; */
//     background: #F0F4FC;
//     border-bottom: 5px solid #F3B516;
//     margin-right: 30px;
// }
// .yellowColor{
//     border-bottom: 5px solid #F3B516;
// }

// .circle_circle_yellow{
//     width: 35px;
//     height: 35px;
//     border-radius: 50%;
//     border: 3px solid transparent;
//     background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
//     background-repeat: no-repeat;
//     background-position: center center, left top, right top, left bottom, right bottom;
//     background-origin: content-box, border-box, border-box, border-box, border-box;
//     background-clip: content-box, border-box, border-b
// Lois Omodibo2:49 AM
// background-clip: content-box, border-box, border-box, border-box, border-box;
//     transform: rotate(1deg);
//     background-image: linear-gradient(white, white), 
//                       linear-gradient(30deg, #F3B516 36%, #F3B516 30%), 
//                       linear-gradient(120deg,#F3B516 36%,  #F3B516 30%), 
//                       linear-gradient(300deg, #D9D9D9 36%, #D9D9D9 30%), 
//                       linear-gradient(210deg, #D9D9D9 36%, #D9D9D9 30%);
// }

// .yellow{
//     color:#F3B516;
// }
// /* red */

// .circle_circle_red p{
//     color: rgba(0, 0, 0, 0.8);
//     font-weight: 600;
//     font-size: 16px;
//     position: fixed;
//     left: 5px;
//     top: 5px;
// }

// .prediction_redColor{
//     display: flex;
//     align-items: flex-end;
//     justify-content: space-between;
//     width: 190px;
//     padding: 10px;
//     /* border: 2px solid blue; */
//     background: #F0F4FC;
//     border-bottom: 5px solid #D30744;
//     margin-right: 30px;
// }

// .redColor{
//     border-bottom: 5px solid #D30744;
// }
// .circle_circle_red{
//     width: 35px;
//     height: 35px;
//     border-radius: 50%;
//     border: 3px solid transparent;
//     background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
//     background-repeat: no-repeat;
//     background-position: center center, left top, right top, left bottom, right bottom;
//     background-origin: content-box, border-box, border-box, border-box, border-box;
//     background-clip: content-box, border-box, border-box, border-box, border-box;
//     transform: rotate(1deg);
// background-image: linear-gradient(white, white), 
//                       linear-gradient(30deg, #D30744 36%, #D30744 30%), 
//                       linear-gradient(120deg,#D30744 36%,  #D30744 30%), 
//                       linear-gradient(300deg, #D9D9D9 36%, #D9D9D9 30%), 
//                       linear-gradient(210deg, #D9D9D9 36%, #D9D9D9 30%);                  
// }

// .red{
//     color: #D30744;
// }