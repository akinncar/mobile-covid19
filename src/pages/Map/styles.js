import styled from "styled-components/native";
import { Dimensions } from "react-native";

import MapView from "react-native-maps";

export const StyledMapView = styled(MapView)`
  width: ${Dimensions.get("window").width};
  height: ${Dimensions.get("window").height};
`;
