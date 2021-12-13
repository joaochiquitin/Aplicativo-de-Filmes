import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#1E1C1A',
  },

  Title: {
    fontSize: 40,
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
    position: 'absolute',
    bottom: 10,
    zIndex: 1000,
  },

  Linear: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
  },

  Description: {
    color: '#c1c1c1',
    marginHorizontal: 10,
    marginTop: 5,
  },

  TextoGenerico: {
    fontSize: 16,
    marginTop: 5,
    color: '#c1c1c1',
  },

  TextoDescricao: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },

  Timer: {
    zIndex: 100,
    position: "absolute",
    right: 10,
    bottom: -30,
    flexDirection: 'row',
    alignItems: "center",
  },

  TimerText: {
    color: '#fff',
    marginLeft: 5,
  }
})