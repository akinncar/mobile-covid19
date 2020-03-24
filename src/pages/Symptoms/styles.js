import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

export const FormContainer = styled.SafeAreaView`
  align-self: stretch;
`;

export const GroupSelect = styled.View`
  margin: 16px 0;
`;

export const LabelSelect = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  align-self: stretch;
  background-color: #008b8b;
  padding: 12px 0;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;
