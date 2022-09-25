import React from "react";
import styled from "styled-components";

const JoinUsForm = () => {
  return (
    <Wrapper>
      <Input placeholder="Email address" />
      <Button>Join us</Button>
    </Wrapper>
  );
};

export default JoinUsForm;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center;s */
`;

const Input = styled.input`
  border: 1px solid var(--color-border);
  flex: 1 1 70%;
  margin-bottom: 16px;
  height: 50px;
  padding: 19px 20px 18px 20px;
`;
const Button = styled.button`
  font-size: ${20 / 16}rem;
  height: 50px;
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  font-weight: 700;
  flex: 1 1 200px;
  text-align: center;
`;
