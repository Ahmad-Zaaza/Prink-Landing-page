import React from "react";
import styled from "styled-components";

const JoinUsForm = () => {
  return (
    <div>
      <Wrapper>
        <Input placeholder="Email address" />
        <Button>Join us</Button>
      </Wrapper>
      <Subtitle>Be the first to know when Prink is live.</Subtitle>
    </div>
  );
};

export default JoinUsForm;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  border: 1px solid var(--color-border);
  margin-bottom: 16px;
  height: 50px;
  min-width: 0;
  width: 100%;
  border-radius: 6px;
  padding: 19px 20px 18px 20px;
  @media ${p => p.theme.queries.tabletAndUp} {
    flex: 1 1 300px;
  }
  @media ${p => p.theme.queries.laptopAndUp} {
    border-radius: 0;
  }
`;
const Button = styled.button`
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: ${20 / 16}rem;
  height: 50px;
  width: 100%;
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  transition: background-color 150ms ease;
  &:hover {
    background-color: var(--color-primary-hover);
  }
  @media ${p => p.theme.queries.tabletAndUp} {
    flex: 1 1 200px;
  }
  @media ${p => p.theme.queries.laptopAndUp} {
    border-radius: 0;
  }
`;
const Subtitle = styled.p`
  font-size: ${14 / 16}rem;
  color: var(--color-gray-700);
`;
