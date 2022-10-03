import { IconProps } from "../Icon";

const Facebook = ({ size, color = "currentColor" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.0021 0.170898C9.49798 0.170898 0.170898 9.49798 0.170898 21.0022C0.170898 31.398 7.78757 40.0146 17.748 41.5834V27.0251H12.4563V21.0022H17.748V16.4126C17.748 11.1876 20.8584 8.30632 25.6146 8.30632C27.8938 8.30632 30.2813 8.71257 30.2813 8.71257V13.8355H27.648C25.0646 13.8355 24.2563 15.4438 24.2563 17.0917V20.998H30.0292L29.1063 27.0209H24.2563V41.5792C34.2167 40.0188 41.8334 31.4001 41.8334 21.0022C41.8334 9.49798 32.5063 0.170898 21.0021 0.170898Z"
        fill={color}
      />
    </svg>
  );
};

export default Facebook;