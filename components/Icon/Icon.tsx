/**
 * We're given this component "for free" since it's really more
 * specific to React and React Feather. Feel free to read if you're
 * interested, but otherwise you can rely on our docs to learn its
 * API / which props it takes.
 */
import React, { CSSProperties } from "react";
import styled from "styled-components";
import Bowtie from "./CustomIcons/Bowtie";
import Facebook from "./CustomIcons/Facebook";
import Friends from "./CustomIcons/Friends";
import HighHeel from "./CustomIcons/HighHeel";
import Instagram from "./CustomIcons/Instagram";
import Like from "./CustomIcons/Like";
import LinkedIn from "./CustomIcons/LinkedIn";
import Lipstick from "./CustomIcons/Lipstick";
import SearchWithHeart from "./CustomIcons/SearchWithHeart";
import TipsAndTricks from "./CustomIcons/TipsAndTricks";
import Twitter from "./CustomIcons/Twitter";

const icons = {
  "search-with-heart": SearchWithHeart,
  "tips-and-tricks": TipsAndTricks,
  like: Like,
  friends: Friends,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: LinkedIn,
  "high-heel": HighHeel,
  lipstick: Lipstick,
  bowtie: Bowtie,
};

export interface IconProps {
  size: number | string;
  color?: string;
}

export interface IconsProps {
  id: keyof typeof icons;
  style?: CSSProperties;
  strokeWidth?: number | string;
  size: number | string;
  color?: string;
}

const Icon = ({ id, size, strokeWidth = 1, style, color }: IconsProps) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={
        {
          "--size": size + "px",
          "--stroke-width": strokeWidth + "px",
          ...style,
        } as CSSProperties
      }
    >
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);
  /*
     OMG I'm doing that thing I've warned against doing!
     Unfortunately, react-feather doesn't make it possible to pass
     discrete styles to the nested SVG within its components.
     Because I'm "reaching in" to third-party code, though, it feels
     OK. In my mind, this Icon is my bridge to that third-party code,
     and if I have to do some hacky stuff, that's fine. It's
     a special circumstance, and I won't ever have to look at the
     react-feather JSX and try to work out where this SVG style
     is coming from.
   */
  & > svg {
    display: block;
    stroke-width: var(--stroke-width);
  }
`;

export default Icon;
