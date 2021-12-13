import React from "react";

import { Image, ScrollView, Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type ParamList = {
  Detail: {
    movie: any;
  };
};

export default function Movie() {
  const route = useRoute<RouteProp<ParamList, "Detail">>();

  const movie = route?.params?.movie;

  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <LinearGradient
            style={styles.Linear}
            colors={["rgba(0,0,0,0.6)", "transparent"]}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 0 }}
          ></LinearGradient>

          <Image
            resizeMode="repeat"
            source={{ uri: movie.Poster }}
            style={{ width: "100%", height: 300 }}
          />

          <View style={styles.Timer}>
            <Ionicons
              name="time-outline"
              size={24}
              color="#fff"
            />

            <Text style={styles.TimerText}>{movie.Runtime}</Text>
          </View>

          <Text style={styles.Title}>{movie.Title}</Text>
        </View>

        <View>
          <Text style={styles.TextoDescricao}>Descrição</Text>
          <Text style={styles.Description}>{movie.Plot}</Text>
        </View>

        <View style={{ marginHorizontal: 10, marginTop: 10 }}>
          <Text style={styles.TextoGenerico}>
            <Text style={{ color: "#fff" }}>Genêros:</Text> {movie.Genre}
          </Text>
          <Text style={styles.TextoGenerico}>
            <Text style={{ color: "#fff" }}>Diretor(a):</Text> {movie.Director}
          </Text>
          <Text style={styles.TextoGenerico}>
            <Text style={{ color: "#fff" }}>Elenco:</Text> {movie.Actors}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
