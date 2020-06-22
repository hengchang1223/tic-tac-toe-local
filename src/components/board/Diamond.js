import React from 'react';

// function Diamond(props) {
//     return (
//       <button
//         className="parallelogram"
//             onClick={props.onClick}>
//                 {props.value}
//         </button>
//     )
//   }

const Diamond = (props) => {
    return (
        <button
            className="parallelogram"
            onClick={props.onClick}>
                {props.value}
        </button>
    );
};

export default Diamond;