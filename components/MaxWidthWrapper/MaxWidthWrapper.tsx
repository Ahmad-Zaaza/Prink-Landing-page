import React from "react";
import styled from "styled-components";

const MaxWidthWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MaxWidthWrapper;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
`;
