// import React, { useState, useEffect, useCallback} from 'react';
// import axios from 'axios';
// import '../imageSelect/imageSelect.scss';
// import image1 from '../images/hamster-1.jpg';
// import image2 from '../images/hamster-2.jpg';

// const Competition = () => {
//   const [hamsterRight, setHamsterRight] = useState('');
//   const [hamsterLeft, setHamsterLeft] = useState('');

//   const fetchRightHamster = useCallback(() => {
//     axios({
//       "method": "GET",
//       "url": "https://safe-harbor-15583.herokuapp.com/api/hamsters/random"
//     })
//     .then((response) => {
//       setHamsterRight(response.data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//   }, []);
  
//   useEffect(() => {
//     fetchRightHamster()
//   }, [fetchRightHamster]);
//   return (
//     <div>
//       <div className='imageSelect-wrapper'>
//         <div className='wrapperBorder'>
//           <div className='image1'><img src={image1} />
//             <div>Name:Hello</div>
//           </div>
//           <div className=''><img src={image2} />
//             <div>Name:</div>
//           </div>
//         </div>
//       </div> 
//   </div>
//   )
// };

// export default Competition;