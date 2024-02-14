// utils
import { copyToClipboard } from "../../../utils/copy";
// styles
import { Button, Link, Referral, Title, Wrapper } from "./ReferralLink.styles";
// types
import { ReferralLinkProps } from "./ReferralLink.types";

export const ReferralLink: React.FC<ReferralLinkProps> = ({
  link,
  title,
  onClick,
  ...props
}) => {
  return (
    <Referral {...props}>
      <Wrapper>
        <Title>{title}</Title>
        <Link>{link}</Link>
      </Wrapper>
      <Button
        onClick={(e) => {
          onClick && onClick(e);
          copyToClipboard(link);
        }}
      >
        Копировать ссылку
      </Button>
    </Referral>
  );
};
