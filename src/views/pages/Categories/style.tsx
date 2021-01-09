import styled from 'styled-components';

// const flexRow = `
// display:flex;
// flex-direction:row;
// flex-wrap:wrap;
// `;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1edee;
  border-radius: 1rem;
  padding: 1rem;
  width: 74.5rem;
  height: 64rem;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  flex: 1 0 21%;
  margin-bottom: 1rem;
`;
