import React from "react";
import { IconProps } from "../Icon";

const SearchWithHeart = ({ size, color = "currentColor" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2815 12.6057C22.9615 7.90044 34.6643 16.1326 18.2815 26.7189C1.89869 16.1326 13.6015 7.90325 18.2815 12.6057Z"
        fill={color}
      />
      <path
        d="M36.5625 18.2813C36.5686 22.1705 35.3286 25.9594 33.0244 29.0926C33.1369 29.1769 33.2438 29.2669 33.3478 29.3682L44.176 40.1963C44.7037 40.7237 45.0003 41.4391 45.0006 42.1852C45.0009 42.9312 44.7047 43.6468 44.1774 44.1746C43.65 44.7023 42.9346 44.999 42.1885 44.9992C41.4424 44.9995 40.7268 44.7034 40.1991 44.176L29.371 33.3479C29.2692 33.2473 29.1752 33.1392 29.0897 33.0244H29.0953C25.7817 35.4555 21.7455 36.6992 17.6383 36.5546C13.531 36.4101 9.59225 34.8857 6.45772 32.2277C3.32319 29.5696 1.17574 25.9329 0.361977 21.9045C-0.45179 17.876 0.115594 13.6909 1.97256 10.0245C3.82952 6.35818 6.86772 3.42448 10.5968 1.69694C14.3259 -0.0306038 18.5283 -0.451208 22.5258 0.503011C26.5233 1.45723 30.0827 3.7306 32.6294 6.95621C35.1762 10.1818 36.5618 14.1715 36.5625 18.2813ZM18.2813 33.7501C20.3127 33.7501 22.3242 33.3499 24.2009 32.5726C26.0777 31.7952 27.7829 30.6558 29.2193 29.2194C30.6557 27.783 31.7952 26.0777 32.5725 24.2009C33.3499 22.3242 33.75 20.3127 33.75 18.2813C33.75 16.2499 33.3499 14.2384 32.5725 12.3617C31.7952 10.4849 30.6557 8.77965 29.2193 7.34325C27.7829 5.90684 26.0777 4.76742 24.2009 3.99004C22.3242 3.21267 20.3127 2.81256 18.2813 2.81256C14.1787 2.81256 10.2442 4.44229 7.34321 7.34325C4.44226 10.2442 2.81252 14.1787 2.81252 18.2813C2.81252 22.3839 4.44226 26.3184 7.34321 29.2194C10.2442 32.1203 14.1787 33.7501 18.2813 33.7501Z"
        fill={color}
      />
    </svg>
  );
};

export default SearchWithHeart;