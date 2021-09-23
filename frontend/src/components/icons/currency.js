import React from 'react';
import { rgba } from 'polished';

const Currency = ({ fill, ...props }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill={fill ?? rgba('#FFFFFF', 0.3)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 0C12.0333 0 9.13315 0.879681 6.66641 2.5279C4.19968 4.17612 2.27709 6.51884 1.14177 9.25973C0.00645978 12.0006 -0.290537 15.0167 0.288241 17.9264C0.867019 20.8361 2.29559 23.5087 4.39338 25.6065C6.49117 27.7043 9.16389 29.133 12.0736 29.7117C14.9833 30.2905 17.9994 29.9934 20.7402 28.8581C23.4811 27.7228 25.8238 25.8003 27.472 23.3336C29.1202 20.8668 30 17.9667 30 15C30 11.0218 28.4196 7.20653 25.6066 4.39349C22.7935 1.58044 18.9782 0 15 0ZM19.0899 20.7858C18.2482 21.6623 17.1061 22.1878 15.8928 22.2571V24.3715H14.1171V22.2571C13.0399 22.1904 12.0195 21.7502 11.2318 21.0123C10.444 20.2744 9.93828 19.2849 9.80144 18.2143L12.5485 17.5C12.5576 17.8194 12.6306 18.1336 12.7634 18.4242C12.8962 18.7148 13.086 18.9759 13.3216 19.1917C13.5572 19.4076 13.8337 19.5739 14.1348 19.6809C14.4358 19.7878 14.7553 19.8332 15.0743 19.8143C15.342 19.8393 15.612 19.8076 15.8668 19.7215C16.1215 19.6354 16.3552 19.4967 16.5528 19.3143C16.7069 19.1555 16.828 18.9675 16.9089 18.7615C16.9898 18.5555 17.029 18.3356 17.0243 18.1144C17.0373 17.9069 17.0015 17.6993 16.9196 17.5082C16.8377 17.3171 16.712 17.148 16.5528 17.0143C15.895 16.6116 15.1883 16.2947 14.45 16.0714C13.6548 15.814 12.8887 15.4741 12.1643 15.0572C11.6047 14.7202 11.1432 14.2423 10.8257 13.6714C10.4722 13.0341 10.2947 12.3143 10.3114 11.5857C10.3038 10.5771 10.6264 9.59379 11.23 8.78575C11.5821 8.34743 12.0201 7.98573 12.5171 7.72287C13.0141 7.46 13.5595 7.30143 14.1199 7.25708V5.62849H15.8957V7.25708C16.8146 7.33274 17.6851 7.70113 18.3793 8.30793C19.0735 8.91473 19.555 9.72795 19.7529 10.6285L17.3071 11.6286C17.2193 11.0883 16.9539 10.5926 16.5529 10.2201C16.1519 9.84751 15.6381 9.61923 15.0928 9.57136C14.8714 9.56213 14.6504 9.59794 14.4432 9.67651C14.2359 9.75508 14.0468 9.87489 13.8871 10.0286C13.7393 10.1765 13.6228 10.3526 13.5445 10.5465C13.4662 10.7404 13.4277 10.9482 13.4314 11.1572C13.4205 11.3508 13.4545 11.5444 13.5305 11.7228C13.6066 11.9011 13.7227 12.0596 13.87 12.1858C14.4555 12.5604 15.0869 12.8581 15.7485 13.0715C16.606 13.3597 17.4364 13.723 18.23 14.1572C18.8244 14.4949 19.32 14.9825 19.6672 15.5715C20.0331 16.2151 20.2186 16.9455 20.2043 17.6857C20.24 18.8231 19.8416 19.9315 19.0899 20.7858Z"
      />
    </svg>
  );
};

export default Currency;
