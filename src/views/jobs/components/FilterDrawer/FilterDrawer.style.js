import styled from '@emotion/styled';

export const FilterContentWrapper = styled.div`
  padding: 24px 10px 20px 24px;
`;

export const FilterTitle = styled.div`
  font-family: Avenir, sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.theme.color.black1};
`;

export const ClearFiltersLabel = styled.div`
  font-family: 'Avenir Book', sans-serif;
  font-size: 14px;
  color: ${props => props.theme.color.purpleishBlue};
  margin-left: 19px;
  cursor: pointer;
`;

export const FilterTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const FilterSectionLabel = styled.div`
  font-family: Avenir, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.theme.color.black1};
  margin-bottom: 16px;
`;

export const FilterSectionContent = styled.div`
  margin-bottom: 38px;
`;

export const PillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
