import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 64px 36px;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const Content = styled.View`
  align-self: stretch;
  margin: 28px;
`;

export const GroupSelect = styled.View`
  margin: 16px 0;
`;

export const LabelSelect = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 12px;
  align-self: stretch;
  background-color: #008b8b;
  padding: 12px 0;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;
