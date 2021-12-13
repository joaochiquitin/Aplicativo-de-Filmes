import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#1E1C1A',
    paddingTop: 30,
  },

  Item: {
  },

  Image: {
    borderRadius: 5,
    width: 120,
    height: 150,
  },

  Texto: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  },

  Header: {
    marginLeft: 10,
    flexDirection: 'row',
    paddingBottom: 15,
  },

  Ola: {
    color: '#fff',
    fontSize: 16,
  },

  Nome: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 17,
  },

  BackgroundViewIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 5,
    position: 'absolute',
    right: 10,
    top: 5,

  }
})