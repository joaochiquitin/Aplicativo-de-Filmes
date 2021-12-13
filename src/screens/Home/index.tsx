import React from "react";

import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { movies } from "./movies";

export default function Home() {
  const navigation: any = useNavigation();

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.Item}
        onPress={() => navigation.navigate("Movie", { movie: item })}
      >
        <Image
          resizeMode="contain"
          source={{ uri: item.Poster }}
          style={styles.Image}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.Container}>
      <StatusBar style="auto" />

      <View style={styles.Header}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 25 }}
          source={{
            uri: "https://avatars.githubusercontent.com/u/51059058?v=4",
          }}
        />

        <View style={{ marginLeft: 10, marginTop: 5 }}>
          <Text style={styles.Ola}>Olá,</Text>
          <Text style={styles.Nome}>Eduardo Costa</Text>
        </View>

        <View style={styles.BackgroundViewIcon}>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </View>
      </View>

      <ScrollView>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.Texto}>Vistos Recentes</Text>
          <FlatList
            data={movies[0].Recentes}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.Title)}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.Texto}>Favoritos</Text>
          <FlatList
            data={movies[0].Favoritos}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.Title)}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.Texto}>Vistos Anteriomente</Text>
          <FlatList
            data={movies[0].Anteriores}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.Title)}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.Texto}>Recomendados</Text>
          <FlatList
            data={movies[0].Recomendados}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.Title)}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.Texto}>Melhores Filmes</Text>
          <FlatList
            data={movies[0].Melhores}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.Title)}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{ marginBottom: 20 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
