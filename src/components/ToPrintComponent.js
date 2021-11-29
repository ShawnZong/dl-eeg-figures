import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import React, { useRef } from "react";
const ComponentToPrint = React.forwardRef((props, ref) => (
  <div style={props.styles} ref={ref}>
    {props.tobePrinted}
  </div>
));
const ToPrintComponent = ({ styles, tobePrinted }) => {
  const componentRef = useRef();

  return (
    <div>
      <ComponentToPrint
        ref={componentRef}
        styles={styles}
        tobePrinted={tobePrinted}
      />
      <button
        onClick={() =>
          exportComponentAsJPEG(componentRef, {
            html2CanvasOptions: { backgroundColor: null },
          })
        }
      >
        Export As JPEG
      </button>
      <button
        onClick={() =>
          exportComponentAsPDF(componentRef, {
            html2CanvasOptions: { backgroundColor: null },
          })
        }
      >
        Export As PDF
      </button>
      <button
        onClick={() =>
          exportComponentAsPNG(componentRef, {
            html2CanvasOptions: { backgroundColor: null },
          })
        }
      >
        Export As PNG
      </button>
    </div>
  );
};
export { ToPrintComponent };
