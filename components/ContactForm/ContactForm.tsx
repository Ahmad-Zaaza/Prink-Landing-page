import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled, { CSSProperties } from "styled-components";
import { emailRegex } from "../../lib/constants";
import Input from "../Input";

type FormProps = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    setSuccessMessage("");
    try {
      setGeneralError("");
      await axios.post("https://api.prink.live/api/contact", data);
      setSuccessMessage(
        "Your message has been sent successfully, Thank you for contacting us!"
      );
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data.data?.email) {
          setError("email", error.response?.data.data?.email[0]);
        } else if (error.response?.data.data?.name) {
          setError("name", error.response?.data.data?.name[0]);
        } else if (error.response?.data.data?.message) {
          setError("message", error.response?.data.data.message[0]);
        } else {
          setGeneralError("Something went wrong, Please try again");
        }
      } else {
        setGeneralError("Something went wrong, Please try again");
      }
    }
  };

  return (
    <div>
      {/* <ContactUsText>Contact us</ContactUsText> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <div>
            <Label>Name</Label>
            <Input {...register("name", { required: "Required field" })} />
            {errors.name?.message && (
              <ErrorMessage>{errors.name?.message}</ErrorMessage>
            )}
          </div>
          <div>
            <Label>Email</Label>
            <Input
              {...register("email", {
                required: "Required field",
                pattern: emailRegex,
              })}
            />
            {errors.email?.message && (
              <ErrorMessage>
                {errors.email?.type === "pattern"
                  ? "Please enter a vlaid email"
                  : errors.email?.message}
              </ErrorMessage>
            )}
          </div>
        </Flex>
        <div>
          <Label>Your message</Label>
          <Textarea
            rows={6}
            {...register("message", { required: "Required field" })}
          />
          {errors.message?.message && (
            <ErrorMessage>{errors.message?.message}</ErrorMessage>
          )}
        </div>
        {generalError && <ErrorMessage>{generalError}</ErrorMessage>}
        <Button
          disabled={isSubmitting}
          style={
            {
              "--color": "var(--color-on-secondary)",
              "--bg": "var(--color-secondary)",
            } as CSSProperties
          }
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>
      {successMessage && <Message>{successMessage}</Message>}
    </div>
  );
};

export default ContactForm;

const Flex = styled.div`
  display: grid;
  gap: 16px;
  margin-bottom: 16px;
  grid-template-columns: 1fr;
  @media ${(p) => p.theme.queries.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
  }
`;
const Label = styled.label`
  font-size: ${16 / 16}rem;
  display: block;
  margin-bottom: 8px;
`;
const Message = styled.span`
  font-size: ${16 / 16}rem;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
  display: block;
`;
const ErrorMessage = styled(Message)`
  font-size: ${14 / 16}rem;
  text-align: initial;
  color: var(--color-error);
`;

const Textarea = styled.textarea`
  border: 1px solid var(--color-border);
  min-width: 0;
  width: 100%;
  /* border-radius: 6px; */
  padding: 19px 20px 18px 20px;
`;
const Button = styled.button`
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: ${20 / 16}rem;
  height: 50px;
  width: 100%;
  background-color: var(--bg);
  color: var(--color);
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  transition: background-color 150ms ease;
  margin-top: 16px;
  &:disabled {
    opacity: 0.4;
    cursor: auto;
  }

  @media ${(p) => p.theme.queries.hoverPointerDevices} {
    &:hover:not(:disabled) {
      background-color: var(--color-primary-hover);
    }
  }

  @media ${(p) => p.theme.queries.tabletAndUp} {
    flex: 1 1 200px;
  }

  @media ${(p) => p.theme.queries.laptopAndUp} {
    border-radius: 0;
  }
`;
const ContactUsText = styled.h6`
  font-size: ${16 / 16}rem;
  line-height: 18px;
  height: 36px;
  /* text-align: center; */
  margin-bottom: 24px;
  @media ${(p) => p.theme.queries.tabletAndUp} {
    height: auto;
    font-size: ${20 / 16}rem;
    line-height: 24px;
  }
`;
