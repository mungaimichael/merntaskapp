import styled from "styled-components";
import { HeroContentWrapper } from "../Home/Hero/Hero.Elements";

export const MainHomePageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: black;
`;

export const HomePageContentWrapper = styled(HeroContentWrapper)`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;

export const ExistingTasksWrapper = styled.div`
  height: 100%;
  width: 100%;
  grid-column: 1/6;
  grid-row: 1/13;
  margin: 0 1rem;
`;

export const AddTasksWrapper = styled(ExistingTasksWrapper)`
  grid-column: 6/11;
  grid-row: 1/4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #3c9e63;
  width: 85%;
  padding: 2rem;
  height: 60%;
  margin: 0 2rem;
`;

export const AddDescriptionsWrapper = styled(ExistingTasksWrapper)`
  margin: 0 2rem;
  grid-column: 6/11;
  grid-row: 4/13;
  background: white;
  width: 85%;
  height: 90%;
`;
