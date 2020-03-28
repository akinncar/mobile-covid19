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

export const FormContainer = styled.SafeAreaView`
  align-self: stretch;
`;

export const TextInput = styled.TextInput`
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #e2e2e2;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
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
