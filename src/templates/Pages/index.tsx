import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import * as S from './styles';
import LinkWrapper from 'components/LinkWrapper';

const PageTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading>My Trips</S.Heading>
      <S.Body>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </S.Body>
    </S.Content>
  );
};
export default PageTemplate;
