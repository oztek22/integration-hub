import React from 'react';
import c from 'classnames';
import './Icons.css';

const size = (x, y = x) => ({
  width: x,
  height: y,
});

const Icons = {
  connection: ({ style, className }) => (
    <svg
      viewBox="0 0 20 20"
      className={c('Icon', 'IconConnection', className)}
      style={style}
      {...size(20, 20)}
    >
      <g stroke="none" strokeWidth="1" ill-rule="evenodd">
        <g
          id="[1]-Jobs"
          transform="translate(-59.000000, -133.000000)"
          fillRule="nonzero"
        >
          <g id="Group-9" transform="translate(42.000000, 131.000000)">
            <g id="Connections" transform="translate(17.000000, 2.000000)">
              <path
                d="M17.0693878,2.93061224 C15.1836735,1.04081633 12.6693878,0 10,0 C7.33061224,0 4.81632653,1.04081633 2.93061224,2.93061224 C1.04489796,4.82040816 1.42108547e-14,7.33061224 1.42108547e-14,10 C1.42108547e-14,12.6693878 1.04081633,15.1836735 2.93061224,17.0693878 C4.82040816,18.955102 7.33061224,20 10,20 C12.6693878,20 15.1836735,18.9591837 17.0693878,17.0693878 C18.955102,15.1795918 20,12.6693878 20,10 C20,7.33061224 18.9591837,4.81632653 17.0693878,2.93061224 Z M19.0938776,9.55102041 L15.2163265,9.55102041 C15.1795918,8.00816327 14.9632653,6.52244898 14.5836735,5.20408163 C15.322449,4.8244898 16.0122449,4.34693878 16.644898,3.78367347 C18.0734694,5.31020408 18.9836735,7.32653061 19.0938776,9.55102041 Z M10.4489796,10.4489796 L14.322449,10.4489796 C14.2897959,11.8693878 14.0938776,13.2285714 13.755102,14.444898 C12.7102041,14.0244898 11.5959184,13.7795918 10.4489796,13.7265306 L10.4489796,10.4489796 L10.4489796,10.4489796 Z M16,3.15918367 C15.477551,3.62040816 14.9061224,4.0122449 14.3020408,4.33877551 C14.1469388,3.90612245 13.9714286,3.49795918 13.7755102,3.11428571 C13.3877551,2.34693878 12.9469388,1.71836735 12.4612245,1.23673469 C13.7877551,1.60816327 14.9918367,2.27346939 16,3.15918367 Z M10.4489796,1.03673469 C11.3836735,1.24489796 12.2653061,2.10612245 12.9755102,3.51020408 C13.1673469,3.88979592 13.3387755,4.29387755 13.4897959,4.72244898 C12.5306122,5.11836735 11.5061224,5.35102041 10.4489796,5.40408163 L10.4489796,1.03673469 Z M13.7591837,5.58367347 C14.0938776,6.79183673 14.2857143,8.14285714 14.3183673,9.55510204 L10.4489796,9.55510204 L10.4489796,6.30612245 C11.6,6.25306122 12.7142857,6.00408163 13.7591837,5.58367347 L13.7591837,5.58367347 Z M9.55102041,9.55102041 L5.67755102,9.55102041 C5.71020408,8.13877551 5.90204082,6.7877551 6.23673469,5.57959184 C7.28163265,6.00408163 8.4,6.24897959 9.54693878,6.29795918 L9.54693878,9.55102041 L9.55102041,9.55102041 Z M9.55510204,1.03673469 L9.55510204,5.40408163 C8.49795918,5.35102041 7.46938776,5.11836735 6.51428571,4.72244898 C6.66530612,4.29387755 6.83673469,3.88979592 7.02857143,3.51020408 C7.73877551,2.10612245 8.62040816,1.24489796 9.55510204,1.03673469 Z M7.54285714,1.23673469 C7.05714286,1.71836735 6.61632653,2.35102041 6.22857143,3.11428571 C6.03673469,3.49795918 5.86122449,3.90612245 5.70204082,4.33877551 C5.09795918,4.0122449 4.53061224,3.62040816 4.00408163,3.15918367 C5.0122449,2.27346939 6.21632653,1.60816327 7.54285714,1.23673469 Z M3.35918367,3.78367347 C3.99183673,4.34693878 4.68163265,4.82040816 5.42040816,5.20408163 C5.04081633,6.52653061 4.82040816,8.00816327 4.7877551,9.55102041 L0.910204082,9.55102041 C1.02040816,7.32653061 1.93061224,5.31020408 3.35918367,3.78367347 Z M0.910204082,10.4489796 L4.7877551,10.4489796 C4.8244898,12.0040816 5.04489796,13.4938776 5.42857143,14.8204082 C4.69387755,15.2 4.00408163,15.6693878 3.3755102,16.2326531 C1.93469388,14.7020408 1.02040816,12.6816327 0.910204082,10.4489796 L0.910204082,10.4489796 Z M4.02040816,16.8571429 C4.54285714,16.4 5.11020408,16.0081633 5.71020408,15.6857143 C5.86530612,16.1061224 6.03673469,16.5102041 6.22857143,16.8857143 C6.61632653,17.6530612 7.05714286,18.2816327 7.54285714,18.7673469 C6.2244898,18.3959184 5.0244898,17.7346939 4.02040816,16.8571429 Z M9.55510204,18.9632653 C8.62040816,18.755102 7.73877551,17.8938776 7.02857143,16.4897959 C6.84081633,16.1183673 6.67346939,15.722449 6.52244898,15.3020408 C7.47755102,14.9061224 8.50204082,14.6734694 9.55510204,14.6244898 L9.55510204,18.9632653 L9.55510204,18.9632653 Z M6.24897959,14.444898 C5.91020408,13.2285714 5.71428571,11.8693878 5.68163265,10.4489796 L9.55510204,10.4489796 L9.55510204,13.7265306 C8.40816327,13.7755102 7.29387755,14.0204082 6.24897959,14.444898 Z M10.4530612,18.9632653 L10.4530612,14.6244898 C11.5061224,14.677551 12.5306122,14.9061224 13.4857143,15.3020408 C13.3346939,15.722449 13.1673469,16.1183673 12.9795918,16.4897959 C12.2693878,17.8938776 11.3877551,18.755102 10.4530612,18.9632653 L10.4530612,18.9632653 Z M12.4653061,18.7632653 C12.9510204,18.2816327 13.3918367,17.6489796 13.7795918,16.8816327 C13.9714286,16.5061224 14.1428571,16.1020408 14.2979592,15.6816327 C14.8979592,16.0040816 15.4653061,16.3959184 15.9877551,16.8530612 C14.9836735,17.7346939 13.7836735,18.3959184 12.4653061,18.7632653 L12.4653061,18.7632653 Z M16.6367347,16.2326531 C16.0081633,15.6734694 15.3183673,15.2 14.5836735,14.8204082 C14.9673469,13.4938776 15.1877551,12 15.2244898,10.4489796 L19.1020408,10.4489796 C18.9877551,12.6816327 18.0734694,14.7020408 16.6367347,16.2326531 L16.6367347,16.2326531 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  breifcase: ({ style, className }) => (
    <svg
      x="0px"
      y="0px"
      viewBox="0 -5 100 110"
      version="1.1"
      className={c('Icon', 'IconBreifcase', className)}
      style={style}
      {...size(20, 20)}
    >
      <g>
        <g>
          <path d="M84.695,92.145H15.303C8.244,92.145,2.5,86.398,2.5,79.34V32.265c0-7.059,5.744-12.803,12.803-12.803h69.393    c7.059,0,12.805,5.744,12.805,12.803V79.34C97.5,86.398,91.754,92.145,84.695,92.145z M15.303,23.729    c-4.707,0-8.536,3.829-8.536,8.536V79.34c0,4.703,3.829,8.533,8.536,8.533h69.393c4.704,0,8.533-3.83,8.533-8.533V32.265    c0-4.707-3.829-8.536-8.533-8.536H15.303z" />
        </g>
        <g>
          <path d="M70.748,23.729H29.262v-5.686c0-5.619,4.566-10.188,10.182-10.188h21.121c5.615,0,10.184,4.569,10.184,10.188V23.729z     M33.528,19.462h32.948v-1.419c0-3.264-2.651-5.921-5.912-5.921H39.444c-3.261,0-5.916,2.657-5.916,5.921V19.462z" />
        </g>
        <g>
          <rect x="3.633" y="50.647" width="92.731" height="4.269" />
        </g>
        <g>
          <path d="M56.984,66.242H43.023c-1.766,0-3.201-1.438-3.201-3.203v-9.19c0-1.767,1.435-3.201,3.201-3.201h13.961    c1.767,0,3.204,1.435,3.204,3.201v9.19C60.188,64.805,58.751,66.242,56.984,66.242z M44.088,61.971h11.829v-7.055H44.088V61.971z" />
        </g>
      </g>
    </svg>
  ),
  mapping: ({ style, className }) => (
    <svg
      viewBox="0 0 20 20"
      version="1.1"
      className={c('Icon', 'IconMapping', className)}
      style={style}
      {...size(20, 20)}
    >
      <g
        id="[Use-Me]-Design-Screens"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="[1]-Jobs"
          transform="translate(-60.000000, -173.000000)"
          strokeWidth="1"
        >
          <g id="Group-9" transform="translate(42.000000, 131.000000)">
            <g id="Group-2" transform="translate(19.000000, 42.000000)">
              <g id="Mapping-Profile" transform="translate(0.000000, 1.000000)">
                <g id="Group">
                  <circle id="Oval" cx="9" cy="3.52173913" r="3.52173913" />
                  <circle id="Oval" cx="9" cy="16.0434783" r="1.95652174" />
                  <circle
                    id="Oval"
                    cx="1.95652174"
                    cy="16.0434783"
                    r="1.95652174"
                  />
                  <circle
                    id="Oval"
                    cx="16.0434783"
                    cy="16.0434783"
                    r="1.95652174"
                  />
                  <polyline
                    id="Path"
                    points="16.0434783 14.0869565 16.0434783 10.5652174 1.95652174 10.5652174 1.95652174 14.0869565"
                  />
                  <path d="M9,7.04347826 L9,14.0869565" id="Path" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  filter: ({ style, className }) => (
    <svg
      width="10px"
      height="7px"
      viewBox="0 0 10 7"
      className={c('Icon', 'IconFilter', className)}
      style={style}
      {...size(20, 20)}
    >
      <defs>
        <path
          d="M3.88020833,6.66666667 L3.88020833,5.546875 L6.11979167,5.546875 L6.11979167,6.66666667 L3.88020833,6.66666667 Z M0,0 L10,0 L10,1.11979167 L0,1.11979167 L0,0 Z M1.66666667,3.88020833 L1.66666667,2.78645833 L8.33333333,2.78645833 L8.33333333,3.88020833 L1.66666667,3.88020833 Z"
          id="path-1"
        />
      </defs>
      <g
        id="[Use-Me]-Design-Screens"
        stroke="none"
        strokeWidth="1"
        fillRule="evenodd"
      >
        <g id="[1]-Jobs" transform="translate(-346.000000, -143.000000)">
          <g id="Group-11" transform="translate(341.000000, 136.000000)">
            <g id="Group-5">
              <g id="Group" transform="translate(5.000000, 7.000000)">
                <mask id="mask-2">
                  <use />
                </mask>
                <use id="Filter" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  alert: ({ style, className }) => (
    <svg
      className={c('Icon', 'IconAlert', className)}
      style={style}
      {...size(19, 16)}
    >
      <path
        fillRule="nonzero"
        d="M7.69.938a2 2 0 0 1 3.389 0l7.384 11.776a2 2 0 0 1-1.695 3.062H2a2 2 0 0 1-1.694-3.062L7.69.938zm2.647 12.226a1.248 1.248 0 0 0 0-1.738 1.177 1.177 0 0 0-1.69 0 1.256 1.256 0 0 0 0 1.738c.223.23.531.362.847.362.315 0 .623-.133.843-.362zm-.935-9.097c-.92 0-1.152.74-1.095 1.182l.555 4.668c.022.444.297.582.54.582.217 0 .52-.16.539-.582l.555-4.668c.057-.43-.169-1.182-1.094-1.182z"
      />
    </svg>
  ),
  'angle-down': ({ style, className }) => (
    <svg
      className={c('Icon', 'IconAngleDown', className)}
      style={style}
      {...size(11, 7)}
    >
      <path
        fillRule="nonzero"
        d="M5.4 4.117L1.55.266A.906.906 0 0 0.267.267.904.904 0 0 0 .266 1.55L4.76 6.044a.901.901 0 0 0 .64.264.899.899 0 0 0 .64-.264l4.495-4.495a.906.906 0 0 0-.001-1.282.904.904 0 0 0-1.282-.001L5.4 4.117z"
      />
    </svg>
  ),
};

export default Icons;
