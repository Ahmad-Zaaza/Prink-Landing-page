import axios from "axios";
import { FormEventHandler, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { emailRegex } from "../../lib/constants";

interface IProps {
  hideSubtitle?: boolean;
  buttonVariant?: "primary" | "secondary";
}

const JoinUsForm = ({ hideSubtitle, buttonVariant = "primary" }: IProps) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState("");

  const onSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    try {
      setError("");
      setIsLoading(true);
      setMessage("");
      if (email.match(emailRegex)) {
        await axios.post("https://api.prink.live/api/store-email", { email });
        setError("");
        setMessage("Thank you for joining our app!");
        setEmail("");
      } else {
        setMessage("");
        setError("Please enter a valid email");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data.data.email) {
          setError(error.response?.data.data.email[0]);
        } else {
          setError("Something went wrong, Please try again");
        }
      } else {
        setError("Something went wrong, Please try again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Wrapper onSubmit={onSubmit}>
        <Input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <Button
          style={
            {
              "--color":
                buttonVariant === "primary"
                  ? "var(--color-on-primary)"
                  : "var(--color-on-secondary)",
              "--bg":
                buttonVariant === "primary"
                  ? "var(--color-primary)"
                  : "var(--color-secondary)",
            } as CSSProperties
          }
          disabled={isLoading}
        >
          Join us
        </Button>
      </Wrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {message && <SuccessMessage>{message}</SuccessMessage>}
      {!hideSubtitle && (
        <Subtitle>Be the first to know when Prink is live.</Subtitle>
      )}
    </div>
  );
};

export default JoinUsForm;

const Wrapper = styled.form`
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
  @media ${(p) => p.theme.queries.tabletAndUp} {
    flex: 1 1 300px;
  }
  @media ${(p) => p.theme.queries.laptopAndUp} {
    border-radius: 0;
  }
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

const Subtitle = styled.p`
  font-size: ${16 / 16}rem;
  color: var(--color-gray-700);
`;

const Message = styled.span`
  font-size: ${15 / 16}rem;
  color: var(--color-error);
  margin-top: -8px;
  margin-bottom: 8px;
  display: block;
`;

const SuccessMessage = styled(Message)`
  color: var(--color-success);
`;

const ErrorMessage = styled(Message)`
  color: var(--color-error);
`;
